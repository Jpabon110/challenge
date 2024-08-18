-- CreateTable
CREATE TABLE "Contract" (
    "id" SERIAL NOT NULL,
    "clientname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "initialdate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accountNumber" INTEGER NOT NULL,
    "amount" INTEGER NOT NULL,
    "currency" INTEGER NOT NULL,

    CONSTRAINT "Contract_pkey" PRIMARY KEY ("id")
);
