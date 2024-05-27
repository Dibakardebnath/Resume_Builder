import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed  top-1 left-0 w-full h-16 flex items-center justify-between px-20 bg-gray-100 shadow-md z-50'>
        <div className='flex m-auto items-center w-14 bg-teal-200 p-2 rounded-full border'>
            <Image className='w-full rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp_8i0RW5okErKw8FNJIQGxPXcku7i2ixqcG3-SFyGC0rslk6AElCxyNSeoAWdtc28Wxw&usqp=CAU" alt="Logo" />
            {/* <Link href="/" className='ml-4 text-xl font-semibold text-gray-700'>Home</Link> */}
        </div>
        {/* <button className='px-4 py-2 bg-teal-600 text-white rounded hover:bg-teal-700 transition duration-300'>Download</button> */}
    </nav>

  )
}

export default Navbar
