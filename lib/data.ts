import {prisma} from "@/lib/prisma"

export const getBooks = async () =>{
    try {
        const books = await prisma.book.findMany()
        return books;
    } catch (error) {
        throw new Error("gagal untuk fetching data buku");
    }
}

export const getBooksById = async (id: string) =>{
    try {
        const book = await prisma.book.findUnique({
            where: {id}
        })
        return book;
    } catch (error) {
        throw new Error("gagal untuk fetching data buku");
    }
}