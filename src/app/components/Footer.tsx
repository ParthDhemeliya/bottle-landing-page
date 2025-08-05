import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <>
      <footer className="w-full px-4 md:px-8 lg:px-12 -mt-16 bg-[#F8F8F8] h-auto min-h-[355px] relative">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12 py-8 md:py-12">
            {/* Brand/About Section */}
            <div className="flex flex-col relative">
              {/* Frost div with Brand content inside */}
              <div className="w-full max-w-[308px] h-auto min-h-[213px] rotate-0 opacity-100 bg-white/10 rounded-lg flex flex-col justify-between backdrop-blur-sm p-4 md:p-6">
                {/* Logo */}
                <div className="w-full max-w-[174px] h-[40px] rotate-0 opacity-100 mb-4">
                  <Image
                    src="/assets/30TOLlogo.jpg"
                    alt="BOTOL Logo"
                    width={174}
                    height={40}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Description */}
                <div className="w-full max-w-[300px] h-auto min-h-[137px] rotate-0 opacity-100 font-['Familjen_Grotesk'] font-normal text-sm md:text-base leading-[26px] tracking-[0%] text-black mb-6">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam.
                  </p>
                </div>

                {/* Social Media Icons */}
                <div className="w-full max-w-[106px] h-[26px] rotate-0 opacity-100 flex gap-3 md:gap-4">
                  {/* Facebook */}
                  <div className="w-[26px] h-[26px] rotate-0 opacity-100 flex items-center justify-center">
                    <Image
                      src="/facebook.png"
                      alt="Facebook"
                      width={26}
                      height={26}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Instagram */}
                  <div className="w-[26px] h-[26px] rotate-0 opacity-100 flex items-center justify-center">
                    <Image
                      src="/insta.png"
                      alt="Instagram"
                      width={26}
                      height={26}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Twitter/X */}
                  <div className="w-[26px] h-[26px] rotate-0 opacity-100 flex items-center justify-center">
                    <Image
                      src="/X.png"
                      alt="X (Twitter)"
                      width={26}
                      height={26}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div className="space-y-3 md:space-y-4 mt-6 md:mt-0">
              <h3 className="text-base md:text-lg font-bold text-black">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    Journal
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    Custom
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>

            {/* Customer Care Section */}
            <div className="space-y-3 md:space-y-4 mt-6 md:mt-0">
              <h3 className="text-base md:text-lg font-bold text-black">
                Customer Care
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    Returns
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    Ordering
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    Shipping
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-xs md:text-sm text-black hover:text-gray-600 transition-colors"
                  >
                    Personalization Policies
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Us Section */}
            <div className="space-y-3 md:space-y-4 mt-6 md:mt-0">
              <h3 className="text-base md:text-lg font-bold text-black">
                Contact us
              </h3>
              <div className="space-y-2 md:space-y-3">
                {/* Location */}
                <div className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full text-black"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-black">
                    857 4074 Vicente Pass, Deckowview
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full text-black"
                    >
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-black">
                    Jonedoe@xyz.com
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-2 md:space-x-3">
                  <div className="w-3 h-3 md:w-4 md:h-4 mt-0.5 flex-shrink-0">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-full h-full text-black"
                    >
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="text-xs md:text-sm text-black">
                    +86 11 2222 9999
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Border - Outside Footer */}
      <div className="w-full h-[50px] rotate-0 opacity-100 bg-[#EBEBEB] relative">
        <div className="w-full max-w-[312px] h-[20px] rotate-0 opacity-100 absolute top-[15px] left-1/2 transform -translate-x-1/2 md:left-[599px] md:transform-none font-['Familjen_Grotesk'] font-normal text-sm md:text-base leading-[20px] tracking-[0%] text-black">
          Copyright © 2023 BOTOL. All Rights Reserved.
        </div>
      </div>
    </>
  )
}

export default Footer
