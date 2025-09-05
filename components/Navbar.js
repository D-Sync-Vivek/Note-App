import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav className='flex justify-between  p-2 bg-gray-200 items-center font-semibold'>
        <ul className='flex gap-6'>
            <Link href='/'><li className='text-gray-700 hover:text-black hover:underline'>Home</li></Link>
            <Link href='/notes'><li className='text-gray-700 hover:text-black hover:underline'>Notes</li></Link>
            <Link href='/about'><li className='text-gray-700 hover:text-black hover:underline'>About</li></Link>
            <Link href='/contact'><li className='text-gray-700 hover:text-black hover:underline'>Contact</li></Link>
        </ul>
        
    </nav>
  )
}

export default Navbar
