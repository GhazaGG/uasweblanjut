-- CreateTable
CREATE TABLE "Book" (
    "id" TEXT NOT NULL,
    "kode_buku" TEXT NOT NULL,
    "isbn" TEXT NOT NULL,
    "judul_buku" TEXT NOT NULL,
    "pengaran" TEXT NOT NULL,
    "sekilas_isi" TEXT NOT NULL,
    "tanggal_masuk" TIMESTAMP(3) NOT NULL,
    "stok" INTEGER NOT NULL,
    "foto" TEXT,

    CONSTRAINT "Book_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Book_kode_buku_key" ON "Book"("kode_buku");

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");
