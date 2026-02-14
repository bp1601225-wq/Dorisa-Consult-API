-- CreateTable
CREATE TABLE "TestRoute" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TestRoute_pkey" PRIMARY KEY ("id")
);
