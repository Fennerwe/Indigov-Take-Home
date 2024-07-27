-- CreateTable
CREATE TABLE "constituent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT
);

-- CreateTable
CREATE TABLE "ConstituentAddress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street1" TEXT NOT NULL,
    "street2" TEXT,
    "street3" TEXT,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "zip" TEXT NOT NULL,
    "constituentId" TEXT NOT NULL,
    CONSTRAINT "ConstituentAddress_constituentId_fkey" FOREIGN KEY ("constituentId") REFERENCES "constituent" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "constituent_email_key" ON "constituent"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ConstituentAddress_constituentId_key" ON "ConstituentAddress"("constituentId");
