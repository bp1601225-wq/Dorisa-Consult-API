/*
  Warnings:

  - Changed the type of `proposal_status` on the `Proposal` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Proposal" DROP COLUMN "proposal_status",
ADD COLUMN     "proposal_status" "ProposalStatus" NOT NULL;
