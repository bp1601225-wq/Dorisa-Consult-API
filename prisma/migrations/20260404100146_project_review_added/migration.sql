-- CreateEnum
CREATE TYPE "ReviewStatus" AS ENUM ('PENDING', 'APPROVED', 'REJECTED', 'NEGOTIATING');

-- CreateTable
CREATE TABLE "ProjectReview" (
    "id" TEXT NOT NULL,
    "service_id" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    "contract_id" TEXT,
    "scope" TEXT NOT NULL,
    "deliverables" TEXT NOT NULL,
    "timeline" TEXT NOT NULL,
    "pricing" INTEGER NOT NULL,
    "status" "ReviewStatus" NOT NULL,
    "termsAndCondition" TEXT NOT NULL,

    CONSTRAINT "ProjectReview_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ProjectReview" ADD CONSTRAINT "ProjectReview_service_id_fkey" FOREIGN KEY ("service_id") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProjectReview" ADD CONSTRAINT "ProjectReview_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
