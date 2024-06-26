import React from 'react'
import { getBooks } from '@/lib/data';
import { EditButton, DeleteButton } from '@/components/button';

const BookTable = async () => {

    const books = await getBooks();

  return (
    <table className='w-full text-sm text-left text-gray500'>
        <thead className='text-sm text-gray-700 uppercase bg-gray-50'>
            <tr>
                <th className='py-3 px-6'>#</th>
                <th className='py-3 px-6'>Kode Buku</th>
                <th className='py-3 px-6'>ISBN</th>
                <th className='py-3 px-6'>Judul Buku</th>
                <th className='py-3 px-6'>Pengarang</th>
                <th className='py-3 px-6'>Sekilas Isi</th>
                <th className='py-3 px-6'>Tanggal Masuk</th>
                <th className='py-3 px-6'>Stok</th>
                <th className='py-3 px-6'>Foto</th>
                <th className='py-3 px-6 text-center'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book, index) => (
                <tr key={book.id} className='bg-white border-b'>
                    <td className='py-3 px-6'>{index + 1}</td>
                    <td className='py-3 px-6'>{book.kode_buku}</td>
                    <td className='py-3 px-6'>{book.isbn}</td>
                    <td className='py-3 px-6'>{book.judul_buku}</td>
                    <td className='py-3 px-6'>{book.pengaran}</td>
                    <td className='py-3 px-6'>{book.sekilas_isi}</td>
                    <td className='py-3 px-6'>{book.tanggal_masuk}</td>
                    <td className='py-3 px-6'>{book.stok}</td>
                    <td className='py-3 px-6'>{book.foto}</td>
                    <td className='flex justify-center gap-1 py-3'>
                        <EditButton id={book.id}/>
                        <DeleteButton id={book.id} />
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default BookTable