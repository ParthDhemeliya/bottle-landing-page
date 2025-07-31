import Image from 'next/image'
import Link from 'next/link'
// import Logo from '@/assets/30TOLlogo.jpg'
import Logo from '../../../public/assets/30TOLlogo.jpg' // Adjust the path as necessary

export default function NavBar() {
  return (
    <header className="bg-white w-full flex justify-between items-center h-[80px] px-4 md:px-20 shadow">
      {/* Logo */}
      <div className="w-[174px] h-[40px] relative mt-[20px]">
        <Image src={Logo} alt="BOTOL Logo" layout="fill" objectFit="contain" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 text-[20px] font-normal leading-[100%] tracking-normal text-[#201F1F]">
        <Link href="#">Shop</Link>
        <Link href="#">Contact us</Link>
        <Link href="#">About</Link>
        <Link href="#">Journal</Link>
        <Link href="#">Custom</Link>
      </nav>

      {/* Inquiry Button */}
      <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-2 rounded-full text-sm">
        Inquiry Now
      </button>
    </header>
  )
}
