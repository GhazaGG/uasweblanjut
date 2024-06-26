import { deleteBook } from "@/lib/action"
import Link from "next/link"
import { IoAddSharp, IoPencil, IoTrashOutline } from "react-icons/io5"
import { string } from "zod"

export const CreateButton = () => {
    return (
        <Link href="/books/create" className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
            <IoAddSharp size={20}/>
            Create
        </Link>
    )
}

export const EditButton = ({id}: {id:string}) => {
    return (
        <Link href={`/books/edit/${id}`} className="rounded-sm border p-1 hover:bg-gray-100">
            <IoPencil size={20}/>
        </Link>
    )
}

export const ViewData = () => {
    return (
        <Link href={`/books`} className="inline-flex items-center space-x-1 text-white bg-blue-700 hover:bg-blue-800 px-5 py-[9px] rounded-sm text-sm">
            <h1>Lihat Data</h1>
        </Link>
    )
}

export const DeleteButton = ({id}: {id:string}) => {
    const DeleteBookWithId = deleteBook.bind(null, id)
    return (
        <form action={DeleteBookWithId}>
            <button className="rounded-sm border p-1 hover:bg-gray-100">
                <IoTrashOutline size={20}/>
            </button>
        </form>
    )
}