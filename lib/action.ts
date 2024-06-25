"use server";

import { z } from "zod";
import {prisma} from "@/lib/prisma"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const BookSchema = z.object({
    kode_buku: z.string(),
    isbn: z.string(),
    judul_buku: z.string(),
    pengaran: z.string(),
    sekilas_isi: z.string(),
    tanggal_masuk: z.string(),
    stok: z.number(),
    foto: z.string(),
})

export const saveBook = async (prevSate:any, formData: FormData) => {
    const validatedFields = BookSchema.safeParse(Object.fromEntries(formData.entries()));
    if(!validatedFields.success){
        return{
            Error: validatedFields.error.flatten().fieldErrors
        }
    }
    try {
        await prisma.book.create({
            data:{
                kode_buku: validatedFields.data.kode_buku,
                isbn: validatedFields.data.isbn,
                judul_buku: validatedFields.data.judul_buku,
                pengaran: validatedFields.data.pengaran,
                sekilas_isi: validatedFields.data.sekilas_isi,
                tanggal_masuk: validatedFields.data.tanggal_masuk,
                stok: validatedFields.data.stok,
                foto: validatedFields.data.foto,
            }
        })
    } catch (error) {
        return {message: 'Failed to create contact'}
    }
    revalidatePath("/books")
    redirect("/books")
};