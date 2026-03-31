/*
  Warnings:

  - Added the required column `Description` to the `Services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Services" ADD COLUMN     "Description" TEXT NOT NULL;
