/*
  Warnings:

  - You are about to drop the column `status` on the `ProjectReview` table. All the data in the column will be lost.
  - You are about to drop the column `termsAndCondition` on the `ProjectReview` table. All the data in the column will be lost.
  - Added the required column `statuclears` to the `ProjectReview` table without a default value. This is not possible if the table is not empty.
  - Added the required column `termsAndConditions` to the `ProjectReview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectReview" DROP COLUMN "status",
DROP COLUMN "termsAndCondition",
ADD COLUMN     "statuclears" "ReviewStatus" NOT NULL,
ADD COLUMN     "termsAndConditions" TEXT NOT NULL;
