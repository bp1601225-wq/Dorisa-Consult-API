/*
  Warnings:

  - The `type` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "UserTypeEnum" AS ENUM ('INDIVIDUAL', 'CORPORATE');

-- DropIndex
DROP INDEX "User_roleId_key";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "type",
ADD COLUMN     "type" "UserTypeEnum";
