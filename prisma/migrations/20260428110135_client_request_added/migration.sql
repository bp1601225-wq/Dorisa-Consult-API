/*
  Warnings:

  - The values [ALL] on the enum `ClientRequestStatus` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `client_request_id` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ClientRequestStatus_new" AS ENUM ('DRAFT', 'PENDING', 'COMPLETED');
ALTER TABLE "ClientRequest" ALTER COLUMN "request_status" TYPE "ClientRequestStatus_new" USING ("request_status"::text::"ClientRequestStatus_new");
ALTER TYPE "ClientRequestStatus" RENAME TO "ClientRequestStatus_old";
ALTER TYPE "ClientRequestStatus_new" RENAME TO "ClientRequestStatus";
DROP TYPE "public"."ClientRequestStatus_old";
COMMIT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "client_request_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_client_request_id_fkey" FOREIGN KEY ("client_request_id") REFERENCES "ClientRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
