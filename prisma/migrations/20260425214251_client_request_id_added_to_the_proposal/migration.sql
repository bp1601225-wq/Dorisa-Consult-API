/*
  Warnings:

  - Added the required column `client_request_id` to the `Proposal` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Proposal" ADD COLUMN     "client_request_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Proposal" ADD CONSTRAINT "Proposal_client_request_id_fkey" FOREIGN KEY ("client_request_id") REFERENCES "ClientRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
