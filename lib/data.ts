import {prisma} from "@/lib/prisma"

export const getBooks = async () =>{
    try {
        const books = await prisma.book.findMany()
        return books;
    } catch (error) {
        throw new Error("gagal untuk fetching data buku");
    }
}