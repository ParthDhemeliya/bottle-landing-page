import Image from 'next/image'
import Link from 'next/link'
// import Logo from '@/assets/30TOLlogo.jpg'
import Logo from '../../../public/assets/30TOLlogo.jpg' // Adjust the path as necessary

export default function NavBar() {
  return (
    <header className="bg-white w-full flex justify-between items-center h-16 md:h-[80px] px-4 md:px-8 lg:px-20 shadow">
      {/* Logo */}
      <div className="w-[120px] md:w-[174px] h-[30px] md:h-[40px] relative mt-2 md:mt-[20px]">
        <Image src={Logo} alt="BOTOL Logo" fill className="object-contain" />
      </div>

      {/* Right side container for nav and button */}
      <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
        {/* Navigation Links */}
        <nav className="flex space-x-4 lg:space-x-8 text-base md:text-lg lg:text-xl font-normal leading-none tracking-normal text-[#201F1F]">
          <Link href="#">Shop</Link>
          <Link href="#">Contact us</Link>
          <Link href="#">About</Link>
          <Link href="#">Journal</Link>
          <Link href="#">Custom</Link>
        </nav>

        {/* Inquiry Button */}
        <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm">
          Inquiry Now
        </button>
      </div>
    </header>
  )
}
