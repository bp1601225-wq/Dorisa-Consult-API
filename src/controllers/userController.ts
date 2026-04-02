import { prisma } from "../prisma/client";
import { Request, Response } from "express";
import argon2 from "argon2";
import { resolveRoleId } from "../utils/roleHelpers";

export const UserController = {
    async GetAllUsers(req: Request, res: Response) {

         
        try {

            // Pagination
const page = Number(req.query.page) || 1;
const PageSize = Number(req.query.PageSize) || 100;

            const skip = (page - 1) * PageSize
            const take = PageSize


            const userPayLoad = await prisma.user.findMany({
                include: {
                    role: {
                        select: {
                            name: true,
                        },
                    },
                },
                skip,
                take, 
                orderBy: {
                    createdAt: 'desc'
                }
            });


  const flattenedUsers = userPayLoad.map(user => ({
    ...user,
    role: user.role?.name || null,
  }));


            // console.log(flattenedUsers)

  const totalUsers = await prisma.user.count()

        
            return res.status(200).json({
                message: "Users fetched successfully",
                data: flattenedUsers,
                total:totalUsers,
                page,
                PageSize
            });
        } catch (error: any) {
            console.error("GET ALL USERS ERROR:", error);
            return res.status(500).json({
                message: "Failed to fetch users",
                error: error.message,
            });
        }
    },

    async CreateUser(req: Request, res: Response) {
        try {
            const incomingData = req.body;
// console.log(incomingData)
            const { roleId, password, ...rest } = incomingData;

            if (!password) {
                return res.status(400).json({
                    message: "Password is required",
                });
            }

            const resolvedRoleId = await resolveRoleId(roleId);

            const newUser = await prisma.user.create({
                data: {
                    ...rest,
                    password: await argon2.hash(password),
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

            return res.status(201).json({
                message: "User created successfully",
                data: newUser,
            });
        } catch (error: any) {
            console.error("CREATE USER ERROR:", error);
            return res.status(400).json({
                message: error.message,
            });
        }
    },
};
