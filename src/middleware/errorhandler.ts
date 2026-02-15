import { Request, Response, NextFunction } from "express";

export function globalErrorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error("GLOBAL ERROR:", err);

  // Network / DB connection error
  if (err.code === "ECONNREFUSED") {
    return res.status(503).json({
      error: "Service unavailable. Check network connection."
    });
  }

  // Validation error
  if (err.message) {
    return res.status(400).json({
      error: err.message
    });
  }

  // Default fallback
  return res.status(500).json({
    error: "Internal server error"
  });
}
