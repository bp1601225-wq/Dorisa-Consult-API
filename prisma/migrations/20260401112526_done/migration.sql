/*
  Warnings:

  - You are about to drop the column `ServiceName` on the `Proposal` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[serviceId]` on the table `Proposal` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `serviceId` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Proposal_ServiceName_key";

-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "ServiceName",
ADD COLUMN     "serviceId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Proposal_serviceId_key" ON "Proposal"("serviceId");

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
