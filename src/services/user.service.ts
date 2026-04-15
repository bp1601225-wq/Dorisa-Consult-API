import argon2 from "argon2";
import { prisma } from "../prisma/client";
import { RoleBasedFetched } from "../utils/helperFunctions";
import { resolveRoleId } from "../utils/roleHelpers";
import { HttpError } from "./errors";

export const UserService = {
  async getAllUsers(user: any, query: any) {
    const page = Number(query?.page) || 1;
    const PageSize = Number(query?.PageSize) || 100;

    const skip = (page - 1) * PageSize;
    const take = PageSize;

    const userPayLoad = await prisma.user.findMany({
      where: RoleBasedFetched.FetchRolesForAdminOnly(user),
      select: {
        id: true,
        fullName: true,
        firstName: true,
        middleName: true,
        lastName: true,
        email: true,
        phone: true,
        country: true,
        companyName: true,
        companyWebsite: true,
        industry: true,
        type: true,
        roleId: true,
        role: {
          select: {
            name: true,
          },
        },
      },
      skip,
      take,
      orderBy: {
        createdAt: "desc",
      },
    });

    const flattenedUsers = userPayLoad.map((row) => ({
      ...row,
      role: row.role?.name || null,
    }));

    const totalUsers = await prisma.user.count();

    return {
      data: flattenedUsers,
      total: totalUsers,
      page,
      PageSize,
    };
  },

  async createUser(incomingData: any) {
    const { roleId, password, email, phone, country, type, ...rest } =
      incomingData ?? {};

    if (!email) throw new HttpError(400, "Email is required");
    if (!phone) throw new HttpError(400, "Phone is required");
    if (!country) throw new HttpError(400, "Country is required");
    if (!password) throw new HttpError(400, "Password is required");

    if (typeof password === "string" && password.length < 8) {
      throw new HttpError(400, "Password must be at least 8 characters");
    }

    if (typeof phone === "string" && phone.length < 10) {
      throw new HttpError(400, "Phone number is too short, must be 10 digits");
    }

    const resolvedRoleId = await resolveRoleId(roleId);
    const hashedPassword = await argon2.hash(password);

    return prisma.user.create({
      data: {
        ...rest,
        email,
        phone,
        country,
        type,
        password: hashedPassword,
        role: {
          connect: { id: resolvedRoleId },
        },
      },
      include: {
        role: {
          select: {
            name: true,
          },
        },
      },
    });
  },

  async editUser(id: string, incomingData: any) {
    const { roleId, ...rest } = incomingData ?? {};

    const data: any = { ...rest };

    if (roleId) {
      const resolvedRoleId = await resolveRoleId(roleId);
      data.role = {
        connect: { id: resolvedRoleId },
      };
    }

    return prisma.user.update({
      where: { id },
      data,
      include: {
        role: {
          select: {
            name: true,
          },
        },
      },
    });
  },
};

