import argon2 from "argon2";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma/client";
import { AuthSchema } from "../schema/schema";
import { HttpError } from "./errors";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined in .env");

type LoginResult = {
  token: string;
  id: string;
  email: string | null;
  fullName: string;
  role: string;
};

export const AuthService = {
  async login(payload: unknown): Promise<LoginResult> {
    const { error, value } = AuthSchema.validate(payload, {
      abortEarly: true,
      stripUnknown: true,
    });

    if (error) {
      throw new HttpError(400, error.details[0]?.message ?? "Invalid payload");
    }

    const { email, password } = value as { email: string; password: string };

    const user = await prisma.user.findUnique({
      where: { email },
      include: { role: true },
    });

    if (!user || !user.password) {
      throw new HttpError(400, "Invalid credentials");
    }

    let isValid = false;
    try {
      isValid = await argon2.verify(user.password, password);
    } catch (verifyError) {
      throw new HttpError(400, "Invalid credentials", verifyError);
    }

    if (!isValid) {
      throw new HttpError(400, "Invalid credentials");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role.name },
      JWT_SECRET,
      { algorithm: "HS256", expiresIn: "15m" }
    );

    const fullName =
      user.fullName ||
      `${user.firstName} ${user.middleName ?? ""} ${user.lastName}`.trim();

    return {
      token,
      id: user.id,
      email: user.email,
      fullName,
      role: user.role.name,
    };
  },
};
