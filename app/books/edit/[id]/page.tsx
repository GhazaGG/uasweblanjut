
import UpdateForm from '@/components/edit-form'
import React from 'react'
import { getBooksById } from '@/lib/data'
import { notFound } from 'next/navigation'

const UpdateBookPage = async ({params}: {params:{id:string}}) => {
    const id = params.id
    const book = await getBooksById(id);


    // const UpdateForm = ({book}: {book:Book}) => {

    if(!book){
        notFound();
    }
  return (
    <div className='max-w-md mx-auto mt-5'>
        <h1 className='text-2xl text-center mb-2'>Edit Book</h1>
        <UpdateForm book={book}/>
    </div>
  )
}

export default UpdateBookPage