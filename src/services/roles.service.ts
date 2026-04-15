import type { Role } from "../generated/prisma/client";
import { prisma } from "../prisma/client";
import { HttpError } from "./errors";

const readableDateFormatter = new Intl.DateTimeFormat("en-US", {
  dateStyle: "medium",
  timeStyle: "short",
});

type RoleWithReadableDate = Role & { createdAtReadable: string };

const addReadableDate = (role: Role): RoleWithReadableDate => ({
  ...role,
  createdAtReadable: readableDateFormatter.format(role.createdAt),
});

const mapRoleWithReadableDate = (role: Role | null): RoleWithReadableDate | null =>
  role ? addReadableDate(role) : null;

export const RolesService = {
  async getAllRoles() {
    const roles = await prisma.role.findMany();
    return roles.map(addReadableDate);
  },

  async createRole(incomingData: any) {
    if (!incomingData?.name) {
      throw new HttpError(200, "name must include a text");
    }

    const role = await prisma.role.create({ data: incomingData });
    return addReadableDate(role);
  },

  async deleteRole(id: string) {
    await prisma.role.delete({ where: { id } });
  },

  async updateRole(id: string, incomingData: any) {
    const role = await prisma.role.update({ where: { id }, data: incomingData });
    return addReadableDate(role);
  },

  async getRoleById(id: string) {
    const role = await prisma.role.findUnique({ where: { id } });
    return mapRoleWithReadableDate(role);
  },
};

