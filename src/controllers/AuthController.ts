import { Request, Response } from "express";
import argon2 from "argon2";
import { prisma } from "../prisma/client";
import jwt from "jsonwebtoken";
import { AuthSchema } from "../schema/schema";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) throw new Error("JWT_SECRET is not defined in .env");

export const AuthController = {
  async Login(req: Request, res: Response) {
    try {
      const incomingdata = req.body;
      console.log("Incoming login attempt:", incomingdata);

      // Validate input
      const { error, value } = AuthSchema.validate(incomingdata, {
        abortEarly: true,
        stripUnknown: true
      });

      if (error) {
        console.log("Validation error:", error.details[0].message);
        return res.status(400).json({ message: error.details[0].message });
      }

      const { email, password } = value;

      // Find user by email and role
      const user = await prisma.user.findUnique({
        where: { email },
        include:{
          role:true
        }
      });




      console.log("User found:", user ? "Yes" : "No");

      if (!user || !user.password) {
        console.log("Invalid credentials: user not found or password missing");
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Verify password safely
      let isValid = false;
      try {
        isValid = await argon2.verify(user.password, password);
      } catch (err) {
        console.error("Password verification error:", err);
        return res.status(400).json({ message: "Invalid credentials" });
      }

      if (!isValid) {
        console.log("Invalid credentials: wrong password");
        return res.status(400).json({ message: "Invalid credentials" });
      }

      // Generate JWT token and some other details
      const token = jwt.sign(
        { id: user.id, 
          email: user.email,  
          role: user.role.name
         },
        JWT_SECRET,
        { algorithm: "HS256", expiresIn: "15m" }
      );

      console.log("Login successful for user:", user);

//  combined names and send to front end
const fullName =
  user.fullName ||
  `${user.firstName} ${user.middleName ?? ""} ${user.lastName}`.trim();




      // Return success to front end
      return res.status(200).json({
        message: "Login successful",
        token,
        id: user.id,
        email: user.email,
        fullName,
        role: user.role.name

      });

    } catch (err: any) {
      console.error("Server error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  },

  async Logout(_req: Request, res: Response) {
    console.log("Logout request received");
    return res.status(200).json({ message: "Logout successful" });
  }
};