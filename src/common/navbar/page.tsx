'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import Logo from '@/assets/30TOLlogo.jpg'
import Logo from '../../../public/assets/30TOLlogo.jpg' // Adjust the path as necessary

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white w-full flex justify-between items-center h-16 md:h-[80px] px-4 md:px-8 lg:px-20 shadow relative">
      {/* Logo */}
      <Link
        href="/"
        className="w-[120px] md:w-[174px] h-[30px] md:h-[40px] relative mt-2 md:mt-[20px]"
      >
        <Image src={Logo} alt="BOTOL Logo" fill className="object-contain" />
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex flex-col space-y-1 p-2"
        aria-label="Toggle menu"
      >
        <span
          className={`block w-6 h-0.5 bg-gray-600 transition-transform ${
            isMenuOpen ? 'rotate-45 translate-y-1.5' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${
            isMenuOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-gray-600 transition-transform ${
            isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
          }`}
        ></span>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
        {/* Navigation Links */}
        <nav className="flex space-x-4 lg:space-x-8 text-base md:text-lg lg:text-xl font-normal leading-none tracking-normal text-[#201F1F]">
          <Link href="/shop">Shop</Link>
          <Link href="/contact">Contact us</Link>
          <Link href="/about">About</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/custom">Custom</Link>
        </nav>

        {/* Inquiry Button */}
        <Link href="/contact">
          <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
            Inquiry Now
          </button>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <nav className="flex flex-col space-y-4 p-4 text-base font-normal leading-none tracking-normal text-[#201F1F]">
            <Link
              href="/shop"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              Shop
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              Contact us
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              About
            </Link>
            <Link
              href="/journal"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              Journal
            </Link>
            <Link
              href="/custom"
              onClick={() => setIsMenuOpen(false)}
              className="py-2 border-b border-gray-100"
            >
              Custom
            </Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-3 rounded-full text-sm mt-4">
                Inquiry Now
              </button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
