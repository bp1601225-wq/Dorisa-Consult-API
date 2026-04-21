import type { Response } from "express";
import { isHttpError } from "../services/errors";

/**
 * `http.ts`
 *
 * Small helper for controllers:
 * - converts a thrown `HttpError` into a proper HTTP response
 * - falls back to 500 for unknown errors
 *
 * This keeps controllers simpler and consistent.
 */
export function sendServiceError(res: Response, error: unknown) {
  if (isHttpError(error)) {
    return res.status(error.statusCode).json({
      message: error.message,
      error: error instanceof Error ? error.message : error,
    });
  }

  const message = error instanceof Error ? error.message : "Internal server error";
  return res.status(500).json({
    message: "Internal server error",
    error: message,
  });
}

