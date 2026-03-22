import { prisma } from "../prisma/client";

const DEFAULT_CLIENT_ROLE_NAME = "Client";

const normalizeRoleName = (value?: string) =>
  value?.trim().replace(/\s+/g, " ") ?? "";

async function ensureRoleByName(roleName: string): Promise<string> {
  const normalized = normalizeRoleName(roleName);
  if (!normalized) throw new Error("Role name must be provided");

  const existingRole = await prisma.role.findFirst({
    where: {
      name: {
        equals: normalized,
        mode: "insensitive",
      },
    },
  });

  if (existingRole) {
    return existingRole.id;
  }

  const newRole = await prisma.role.create({
    data: { name: normalized },
  });

  return newRole.id;
}

export async function resolveRoleId(
  roleIdentifier?: string,
  fallbackRoleName = DEFAULT_CLIENT_ROLE_NAME
): Promise<string> {
  if (roleIdentifier) {
    const rawValue = roleIdentifier.trim();
    if (!rawValue) {
      return ensureRoleByName(fallbackRoleName);
    }

    const byId = await prisma.role.findUnique({ where: { id: rawValue } });
    if (byId) return byId.id;

    const byName = await prisma.role.findFirst({
      where: {
        name: {
          equals: rawValue,
          mode: "insensitive",
        },
      },
    });

    if (byName) return byName.id;

    if (rawValue.toLowerCase() === fallbackRoleName.toLowerCase()) {
      return ensureRoleByName(fallbackRoleName);
    }

    throw new Error(`Role "${rawValue}" does not exist`);
  }

  return ensureRoleByName(fallbackRoleName);
}
