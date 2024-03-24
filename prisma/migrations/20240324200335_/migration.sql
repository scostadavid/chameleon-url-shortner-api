-- CreateTable
CREATE TABLE "ShortenedUrl" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "url" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ShortenedUrl_hash_key" ON "ShortenedUrl"("hash");
