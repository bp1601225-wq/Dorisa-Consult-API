import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";
import { isHttpError } from "../services/errors";

export const AuthController = {
  async Login(req: Request, res: Response) {
    try {
      const result = await AuthService.login(req.body);
      return res.status(200).json({
        message: "Login successful",
        ...result,
      });
    } catch (err: any) {
      if (isHttpError(err)) {
        return res.status(err.statusCode).json({ message: err.message });
      }

      console.error("Server error:", err);
      return res.status(500).json({ message: "Server error" });
    }
  },

  async Logout(_req: Request, res: Response) {
    console.log("Logout request received");
    return res.status(200).json({ message: "Logout successful" });
  }
};
