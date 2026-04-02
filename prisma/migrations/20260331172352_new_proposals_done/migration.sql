/*
  Warnings:

  - The values [PENDING,REJECTED] on the enum `ProposalStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `project_status` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProposalStatus_new" AS ENUM ('DRAFT', 'SENT', 'ACCEPTED', 'DECLINED');
ALTER TYPE "ProposalStatus" RENAME TO "ProposalStatus_old";
ALTER TYPE "ProposalStatus_new" RENAME TO "ProposalStatus";
DROP TYPE "public"."ProposalStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "project_status" "ProjectStatus" NOT NULL;
