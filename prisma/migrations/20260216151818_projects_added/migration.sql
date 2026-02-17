/*
  Warnings:

  - You are about to drop the column `first_name` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `middle_name` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Ticket` table. All the data in the column will be lost.
  - Added the required column `title` to the `Ticket` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Ticket_phone_key";

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "first_name",
DROP COLUMN "isActive",
DROP COLUMN "last_name",
DROP COLUMN "middle_name",
DROP COLUMN "phone",
DROP COLUMN "updatedAt",
ADD COLUMN     "description" TEXT,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
