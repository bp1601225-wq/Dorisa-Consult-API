-- DropForeignKey
ALTER TABLE "Services" DROP CONSTRAINT "Services_clientId_fkey";

-- AlterTable
ALTER TABLE "Services" ALTER COLUMN "clientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Services" ADD CONSTRAINT "Services_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
