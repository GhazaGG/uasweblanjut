

import React from 'react'
import BookTable from '@/components/boook-table'
import { CreateButton } from '@/components/button'
const Books = () => {

  return (
    <div className='mx-3 mt-5'>
        <CreateButton />
        <BookTable />
    </div>
  )
}

export default Books