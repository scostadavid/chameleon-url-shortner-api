-- CreateTable
CREATE TABLE "ShortenedUrl" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT,
    "source_url" TEXT NOT NULL,
    "hash" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL
);
