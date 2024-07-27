/*
  Warnings:

  - You are about to drop the `ConstituentAddress` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ConstituentAddress";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "constituent_address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street1" TEXT NOT NULL,
    "street2" TEXT,
    "street3" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "constituentId" TEXT NOT NULL,
    CONSTRAINT "constituent_address_constituentId_fkey" FOREIGN KEY ("constituentId") REFERENCES "constituent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "constituent_address_constituentId_key" ON "constituent_address"("constituentId");
