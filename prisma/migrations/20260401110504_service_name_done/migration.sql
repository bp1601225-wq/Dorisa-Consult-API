/*
  Warnings:

  - You are about to drop the column `serviceId` on the `Proposal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ServiceName]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ServiceName` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Proposal" DROP CONSTRAINT "Proposal_serviceId_fkey";

-- DropIndex
DROP INDEX "Proposal_serviceId_key";

-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "serviceId",
ADD COLUMN     "ServiceName" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_ServiceName_key" ON "Proposal"("ServiceName");
