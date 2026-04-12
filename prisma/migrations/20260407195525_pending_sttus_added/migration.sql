/*
  Warnings:

  - The values [DRAFT] on the enum `ReviewStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
ALTER TYPE "ProposalStatus" ADD VALUE 'PENDING';

-- AlterEnum
BEGIN;
CREATE TYPE "ReviewStatus_new" AS ENUM ('DRAFTN', 'PENDING', 'APPROVED', 'REJECTED', 'NEGOTIATING');
ALTER TABLE "ProjectReview" ALTER COLUMN "status" TYPE "ReviewStatus_new" USING ("status"::text::"ReviewStatus_new");
ALTER TYPE "ReviewStatus" RENAME TO "ReviewStatus_old";
ALTER TYPE "ReviewStatus_new" RENAME TO "ReviewStatus";
DROP TYPE "public"."ReviewStatus_old";
COMMIT;
