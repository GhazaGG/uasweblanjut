import React from 'react'
import BookTable from '@/components/boook-table'
import Search from '@/components/search'
import { CreateButton } from '@/components/button'

const Books = () => {
  return (
    <div className='mx-3 mt-5'>
        <div className='flex items-center justify-between gap-1 mb-5'>
            <Search />
            <CreateButton />
        </div>
            <BookTable />
    </div>
  )
}

export default Books