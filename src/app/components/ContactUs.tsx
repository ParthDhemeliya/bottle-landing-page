import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div className="w-100% max-w-[1320px] min-h-[750px] opacity-100 rounded-[clamp(12px,2vw,18.7px)] bg-gradient-to-r from-[rgba(32,31,31,0.8)] to-[#201F1F] relative overflow-hidden mx-auto mb-[116px] p-[clamp(20px,3vw,40px)] mt-[45px]">
      {/* Bottle Image */}
      <div className="absolute top-[clamp(80px,10vw,142.12px)] left-[clamp(-60px,-5vw,-37.24px)] rotate-[23.19deg] opacity-90 z-10">
        <Image
          src="/bottle6.png"
          alt="Bottle"
          width={459.2931060467784}
          height={690.09200285837}
          className="w-[clamp(300px,35vw,459.29px)] h-[clamp(450px,50vw,690.09px)] opacity-100 object-contain"
        />
      </div>

      {/* Contact Form Content */}
      <div className="relative z-10 flex flex-col justify-center h-full pl-[50%] pt-[10%] text-white ">
        {/* Contact Form Container */}
        <div className="flex flex-col z-20">
          <h1 className="text-white opacity-100 font-['Familjen_Grotesk'] font-semibold text-[clamp(28px,4vw,40px)] leading-[100%] tracking-[3%] mb-4">
            Get in touch with us
          </h1>

          <p className="text-white font-['Familjen_Grotesk'] font-normal text-[clamp(12px,2vw,14px)] leading-[150%] tracking-[3%] opacity-100 mb-8 max-w-[364px]">
            Hi, I am Amanda. Need help? Use the form below or email <br />
            me at <span className="text-[#00D1FF]">hello@xyz.com</span>
          </p>

          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <label
                htmlFor="name"
                className="text-white font-['Familjen_Grotesk'] font-normal text-[clamp(12px,1.5vw,14px)] leading-[150%] tracking-[3%]"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Rachel Joe"
                className="w-full max-w-[537px] h-[53px] rounded-[5.15px] border-[0.86px] border-[#8D8D8D] pt-[17.18px] pr-[27.49px] pb-[17.18px] pl-[27.49px] bg-[#343333] text-white outline-none transition-colors duration-300 focus:border-[#00D1FF]"
              />
            </div>

            <div className="flex flex-col gap-5">
              <label
                htmlFor="email"
                className="text-white font-['Familjen_Grotesk'] font-normal text-[clamp(12px,1.5vw,14px)] leading-[150%] tracking-[3%]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Rachel@domain.com"
                className="w-full max-w-[537px] h-[53px] rounded-[5.15px] border-[0.86px] border-[#8D8D8D] pt-[17.18px] pr-[27.49px] pb-[17.18px] pl-[27.49px] bg-[#343333] text-white outline-none transition-colors duration-300 focus:border-[#00D1FF]"
              />
            </div>

            <div className="flex flex-col gap-5">
              <label
                htmlFor="message"
                className="text-white font-['Familjen_Grotesk'] font-normal text-[clamp(12px,1.5vw,14px)] leading-[150%] tracking-[3%]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your query here....."
                rows={4}
                className="w-full max-w-[537px] h-[87px] rounded-[5.15px] border-[0.86px] border-[#8D8D8D] pt-[17.18px] pr-[27.49px] pb-[17.18px] pl-[27.49px] bg-[#343333] text-white outline-none transition-colors duration-300 focus:border-[#00D1FF] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-[143px] h-[49px] opacity-100 rounded-[100px] pt-[12px] pr-[36px] pb-[12px] pl-[36px] gap-[10px] bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white border-none cursor-pointer transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
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
