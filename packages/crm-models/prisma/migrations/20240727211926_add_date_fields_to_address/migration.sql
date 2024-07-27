/*
  Warnings:

  - You are about to drop the column `createdAt` on the `constituent` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `constituent` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_constituent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "subscribed" BOOLEAN NOT NULL DEFAULT true,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_constituent" ("email", "first_name", "id", "last_name", "phone", "subscribed") SELECT "email", "first_name", "id", "last_name", "phone", "subscribed" FROM "constituent";
DROP TABLE "constituent";
ALTER TABLE "new_constituent" RENAME TO "constituent";
CREATE UNIQUE INDEX "constituent_email_key" ON "constituent"("email");
CREATE TABLE "new_constituent_address" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street1" TEXT NOT NULL,
    "street2" TEXT,
    "street3" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "constituentId" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "constituent_address_constituentId_fkey" FOREIGN KEY ("constituentId") REFERENCES "constituent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_constituent_address" ("city", "constituentId", "id", "state", "street1", "street2", "street3", "zip") SELECT "city", "constituentId", "id", "state", "street1", "street2", "street3", "zip" FROM "constituent_address";
DROP TABLE "constituent_address";
ALTER TABLE "new_constituent_address" RENAME TO "constituent_address";
CREATE UNIQUE INDEX "constituent_address_constituentId_key" ON "constituent_address"("constituentId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
