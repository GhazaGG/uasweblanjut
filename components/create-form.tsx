"use client"
import React from 'react'

import { saveBook } from '@/lib/action';
import { useFormState } from 'react-dom';

const CreateForm = () => {
    const[state, formAction] = useFormState(saveBook, null);
  return (
    <div>
        <form action={formAction}>
            <div className="mb-5">
                <label 
                htmlFor="kode_buku"
                className='block text-sm font-medium text-gray-900'
                >
                    Kode Buku
                </label>
                <input 
                type="text"
                name='kode_buku'
                id='kode_buku'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Kode Buku...'
                />
                <div id='kode-eror' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>
                        {state?.Error?.kode_buku}
                    </p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="isbn"
                className='block text-sm font-medium text-gray-900'
                >
                    ISBN
                </label>
                <input 
                type="text"
                name='isbn'
                id='isbn'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='ISBN...'
                />
                <div id='isbn-eror' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>
                        {state?.Error?.isbn}
                    </p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="judul_buku"
                className='block text-sm font-medium text-gray-900'
                >
                    Judul Buku
                </label>
                <input 
                type="text"
                name='judul_buku'
                id='judul_buku'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Judul Buku...'
                />
                <div id='judul-eror' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>
                        {state?.Error?.judul_buku}
                    </p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="pengaran"
                className='block text-sm font-medium text-gray-900'
                >
                    Pengarang
                </label>
                <input 
                type="text"
                name='pengaran'
                id='pengaran'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Pengarang...'
                />
                <div id='pengaran-eror' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>
                        {state?.Error?.pengaran}
                    </p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="sekilas_isi"
                className='block text-sm font-medium text-gray-900'
                >
                    Sekilas Isi
                </label>
                <input 
                type="text"
                name='sekilas_isi'
                id='sekilas_isi'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Sekilas Isi...'
                />
                <div id='sekilas-eror' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>
                        {state?.Error?.sekilas_isi}
                    </p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="tanggal_masuk"
                className='block text-sm font-medium text-gray-900'
                >
                    Tanggal Masuk
                </label>
                <input 
                type="date"
                name='tanggal_masuk'
                id='tanggal_masuk'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Tanggal Masuk...'
                />

                <div id='tanggal-eror' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>
                        {state?.Error?.tanggal_masuk}
                    </p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="stok"
                className='block text-sm font-medium text-gray-900'
                >
                    Stok
                </label>
                <input 
                type="number"
                name='stok'
                id='stok'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Stok...'
                />
                <div id='stok-eror' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>
                        {state?.Error?.stok}
                    </p>
                </div>
            </div>
            <div className="mb-5">
                <label 
                htmlFor="foto"
                className='block text-sm font-medium text-gray-900'
                >
                    Foto
                </label>
                <input 
                type="text"
                name='foto'
                id='foto'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Foto...'
                />
                <div id='foto-eror' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>
                        {state?.Error?.foto}
                    </p>
                </div>
            </div>
            <div id='message-eror' aria-live='polite' aria-atomic='true'>
                    <p className='mt-2 text-sm text-red-500'>
                        {state?.message}
                    </p>
                </div>
            <button type='submit' className='text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-sm text-sm w-full px-5 py-3 text-center'>Save</button>
        </form>
    </div>
  )
}

export default CreateForm