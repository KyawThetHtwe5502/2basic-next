import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=' container mx-auto'>
        <h1>My Shop</h1>
        <nav className='flex items-center gap-6'>
            <Link href="/" className='text-blue-500 underline'>Home</Link>
            <Link href="/about-us" className='text-blue-500 underline'>About</Link>
            <Link href="/products" className='text-blue-500 underline'>Products</Link>
            <Link href="/contact-us" className='text-blue-500 underline'>Contact</Link>
        </nav>
    </header>
  )
}

export default Header