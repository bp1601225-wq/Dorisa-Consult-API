/*
  Warnings:

  - You are about to drop the column `clientId` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `ticketId` on the `Invoice` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `invoiceId` on the `Payment` table. All the data in the column will be lost.
  - You are about to drop the column `clientId` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `middleName` on the `Ticket` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `firstName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `middleName` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - Added the required column `client_id` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticket_id` to the `Invoice` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `invoice_id` to the `Payment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `priority_id` to the `Ticket` table without a default value. This is not possible if the table is not empty.
  - Added the required column `first_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Invoice" DROP CONSTRAINT "Invoice_ticketId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_clientId_fkey";

-- DropForeignKey
ALTER TABLE "Payment" DROP CONSTRAINT "Payment_invoiceId_fkey";

-- DropForeignKey
ALTER TABLE "Ticket" DROP CONSTRAINT "Ticket_clientId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "Invoice" DROP COLUMN "clientId",
DROP COLUMN "ticketId",
ADD COLUMN     "client_id" TEXT NOT NULL,
ADD COLUMN     "ticket_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Payment" DROP COLUMN "clientId",
DROP COLUMN "invoiceId",
ADD COLUMN     "client_id" TEXT NOT NULL,
ADD COLUMN     "invoice_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "clientId",
DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "middleName",
ADD COLUMN     "client_id" TEXT NOT NULL,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "middle_name" TEXT,
ADD COLUMN     "priority_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "firstName",
DROP COLUMN "isActive",
DROP COLUMN "lastName",
DROP COLUMN "middleName",
DROP COLUMN "roleId",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "first_name" TEXT NOT NULL,
ADD COLUMN     "is_active" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "middle_name" TEXT,
ADD COLUMN     "role_id" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Priority" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Priority_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Client" (
    "id" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_adress" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,

    CONSTRAINT "Client_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Client" ADD CONSTRAINT "Client_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_priority_id_fkey" FOREIGN KEY ("priority_id") REFERENCES "Priority"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ticket" ADD CONSTRAINT "Ticket_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "Ticket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Invoice" ADD CONSTRAINT "Invoice_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "Invoice"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
