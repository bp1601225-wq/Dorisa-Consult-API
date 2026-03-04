/*
  Warnings:

  - Added the required column `type` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "fullName" TEXT,
ADD COLUMN     "type" TEXT NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ALTER COLUMN "companyName" DROP NOT NULL,
ALTER COLUMN "contactPerson" DROP NOT NULL;
