/*
  Warnings:

  - The values [ACCEPTED,REJECTED] on the enum `ProposalStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProposalStatus_new" AS ENUM ('PENDING', 'DRAFT', 'SENT', 'APPROVED', 'DECLINED', 'NEGOTIATING');
ALTER TABLE "Proposal" ALTER COLUMN "proposal_status" TYPE "ProposalStatus_new" USING ("proposal_status"::text::"ProposalStatus_new");
ALTER TYPE "ProposalStatus" RENAME TO "ProposalStatus_old";
ALTER TYPE "ProposalStatus_new" RENAME TO "ProposalStatus";
DROP TYPE "public"."ProposalStatus_old";
COMMIT;

-- CreateTable
CREATE TABLE "Negotiate" (
    "id" TEXT NOT NULL,
    "clientId" TEXT NOT NULL,
    "proposal_id" TEXT NOT NULL,

    CONSTRAINT "Negotiate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Negotiate" ADD CONSTRAINT "Negotiate_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Negotiate" ADD CONSTRAINT "Negotiate_proposal_id_fkey" FOREIGN KEY ("proposal_id") REFERENCES "ProjectReview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
