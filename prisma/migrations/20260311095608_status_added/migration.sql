-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Active', 'InActive');

-- AlterTable
ALTER TABLE "Role" ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'Active';
