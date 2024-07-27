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
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_constituent" ("email", "first_name", "id", "last_name", "phone") SELECT "email", "first_name", "id", "last_name", "phone" FROM "constituent";
DROP TABLE "constituent";
ALTER TABLE "new_constituent" RENAME TO "constituent";
CREATE UNIQUE INDEX "constituent_email_key" ON "constituent"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
