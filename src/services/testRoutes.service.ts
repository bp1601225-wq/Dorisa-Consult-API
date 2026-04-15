import { prisma } from "../prisma/client";
import { HttpError } from "./errors";

export type TestRouteDelegate = {
  findMany: (args: { take?: number }) => Promise<any>;
  create: (args: { data: { name: string } }) => Promise<any>;
};

export type TestRoutesDependencies = {
  testRoute: TestRouteDelegate;
};

const defaultDeps = prisma as unknown as TestRoutesDependencies;

export async function fetchTestRoutes(
  deps: TestRoutesDependencies = defaultDeps
) {
  return deps.testRoute.findMany({ take: 25 });
}

export async function createTestRouteEntry(
  name: unknown,
  deps: TestRoutesDependencies = defaultDeps
) {
  if (typeof name !== "string" || !name.trim()) {
    throw new HttpError(400, "name is required and must be a string");
  }

  return deps.testRoute.create({
    data: { name },
  });
}
