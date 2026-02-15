import "dotenv/config";
import assert from "node:assert/strict";
import { describe, it } from "node:test";
import type { TestRoutesDependencies } from "./testRoutesController";
import { createTestRouteEntry, fetchTestRoutes } from "./testRoutesController";

type FindManyArgs = Parameters<TestRoutesDependencies["testRoute"]["findMany"]>[0];
type CreateArgs = Parameters<TestRoutesDependencies["testRoute"]["create"]>[0];
type TestRouteDelegate = TestRoutesDependencies["testRoute"];
type FindManyReturn = ReturnType<TestRouteDelegate["findMany"]>;
type CreateReturn = ReturnType<TestRouteDelegate["create"]>;

const baseDelegate: TestRouteDelegate = {
  findMany: () => Promise.resolve([]) as FindManyReturn,
  create: () =>
    Promise.resolve({ id: 0, name: "", createdAt: new Date() }) as CreateReturn,
};

const withOverrides = (overrides: Partial<TestRouteDelegate>): TestRoutesDependencies => ({
  testRoute: {
    ...baseDelegate,
    ...overrides,
  },
});

describe("fetchTestRoutes", () => {
  it("asks Prisma for the configured fetch limit and returns the result", async () => {
    const recordedArgs: Array<FindManyArgs> = [];
    const mockRoutes = [{ id: 1, name: "alpha", createdAt: new Date() }];
    const mockPrisma = withOverrides({
      findMany: (args: FindManyArgs) => {
        recordedArgs.push(args);
        return Promise.resolve(mockRoutes) as FindManyReturn;
      },
    });

    const result = await fetchTestRoutes(mockPrisma);
    assert.strictEqual(result, mockRoutes);
    assert.deepStrictEqual(recordedArgs, [{ take: 25 }]);
  });
});

describe("createTestRouteEntry", () => {
  it("rejects names that are missing or not strings", async () => {
    const mockPrisma = withOverrides({
      create: () => Promise.reject(new Error("not implemented")) as CreateReturn,
    });

    await assert.rejects(
      () => createTestRouteEntry("", mockPrisma),
      {
        message: "name is required and must be a string",
      }
    );
  });

  it("passes the validated payload to Prisma", async () => {
    const recorded: Array<CreateArgs> = [];
    const record = { id: 2, name: "beta", createdAt: new Date() };
    const mockPrisma = withOverrides({
      create: (args: CreateArgs) => {
        recorded.push(args);
        return Promise.resolve(record) as CreateReturn;
      },
    });

    const result = await createTestRouteEntry("beta", mockPrisma);
    assert.strictEqual(result, record);
    assert.deepStrictEqual(recorded, [{ data: { name: "beta" } }]);
  });
});
