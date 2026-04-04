/*
  Warnings:

  - You are about to drop the column `statuclears` on the `ProjectReview` table. All the data in the column will be lost.
  - Added the required column `status` to the `ProjectReview` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ProjectReview" DROP COLUMN "statuclears",
ADD COLUMN     "status" "ReviewStatus" NOT NULL;
