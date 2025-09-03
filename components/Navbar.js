import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex  p-2 bg-sky-400 items-center font-semibold'>
        <ul className='flex gap-6'>
            <Link href='/'><li className='text-gray-800 hover:text-black'>Home</li></Link>
            <Link href='/notes'><li className='text-gray-800 hover:text-black'>Notes</li></Link>
            <Link href='/about'><li className='text-gray-800 hover:text-black'>About</li></Link>
            <Link href='/contact'><li className='text-gray-800 hover:text-black'>Contact</li></Link>
        </ul>
    </nav>
  )
}

export default Navbar
