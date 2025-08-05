import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className="w-full max-w-[1320px] min-h-[750px] opacity-100 rounded-lg md:rounded-xl lg:rounded-2xl bg-gradient-to-r from-[rgba(32,31,31,0.8)] to-[#201F1F] relative overflow-hidden mx-auto mb-8 md:mb-[116px] p-4 md:p-6 lg:p-10 mt-4 md:mt-[45px]">
      {/* Bottle Image */}
      <div className="absolute top-20 md:top-[142px] left-[-60px] md:left-[-37px] rotate-[23.19deg] opacity-90 z-10">
        <Image
          src="/bottle6.png"
          alt="Bottle"
          width={459.2931060467784}
          height={690.09200285837}
          className="w-[300px] md:w-[459px] h-[450px] md:h-[690px] opacity-100 object-contain"
        />
      </div>

      {/* Contact Form Content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-4 md:pl-[50%] pt-4 md:pt-[10%] text-white">
        {/* Contact Form Container */}
        <div className="flex flex-col z-20">
          <h1 className="text-white opacity-100 font-['Familjen_Grotesk'] font-semibold text-2xl md:text-3xl lg:text-4xl leading-none tracking-[3%] mb-4">
            Get in touch with us
          </h1>

          <p className="text-white font-['Familjen_Grotesk'] font-normal text-sm md:text-base leading-relaxed tracking-[3%] opacity-100 mb-6 md:mb-8 max-w-[364px]">
            Hi, I am Amanda. Need help? Use the form below or email <br />
            me at <span className="text-[#00D1FF]">hello@xyz.com</span>
          </p>

          <form className="flex flex-col gap-4 md:gap-6">
            <div className="flex flex-col gap-3 md:gap-5">
              <label
                htmlFor="name"
                className="text-white font-['Familjen_Grotesk'] font-normal text-sm leading-relaxed tracking-[3%]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Rachel Joe"
                className="w-full max-w-[537px] h-[44px] md:h-[53px] rounded-md border border-[#8D8D8D] px-4 md:px-7 py-3 md:py-4 bg-[#343333] text-white outline-none transition-colors duration-300 focus:border-[#00D1FF]"
              />
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
              <label
                htmlFor="email"
                className="text-white font-['Familjen_Grotesk'] font-normal text-sm leading-relaxed tracking-[3%]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Rachel@domain.com"
                className="w-full max-w-[537px] h-[44px] md:h-[53px] rounded-md border border-[#8D8D8D] px-4 md:px-7 py-3 md:py-4 bg-[#343333] text-white outline-none transition-colors duration-300 focus:border-[#00D1FF]"
              />
            </div>

            <div className="flex flex-col gap-3 md:gap-5">
              <label
                htmlFor="message"
                className="text-white font-['Familjen_Grotesk'] font-normal text-sm leading-relaxed tracking-[3%]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your query here....."
                rows={4}
                className="w-full max-w-[537px] h-[87px] rounded-md border border-[#8D8D8D] px-4 md:px-7 py-3 md:py-4 bg-[#343333] text-white outline-none transition-colors duration-300 focus:border-[#00D1FF] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-[120px] md:w-[143px] h-[44px] md:h-[49px] opacity-100 rounded-full px-6 md:px-9 py-3 md:py-4 gap-2 md:gap-3 bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white border-none cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
