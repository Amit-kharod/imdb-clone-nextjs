import Link from 'next/link'
import React from 'react'

function MenuItem({title, address}) {
  return (
    <div>
      <Link href={address} className='hover:text-orange-500'>
        <span className='font-bold text-xl mx-4'>{title}</span>
      </Link>
    </div>
  )
}

export default MenuItem