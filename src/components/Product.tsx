import Image from 'next/image'
import { useState } from 'react'

interface ProductProps {
  imageSrc: string
  imageAlt: string
  name: string
  onLearnMore?: () => void
  priority?: boolean
}

export default function Product({
  imageSrc,
  imageAlt,
  name,
  onLearnMore,
  priority = false,
}: ProductProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <div
      className="w-full max-w-[350px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[450px] xl:max-w-[480px] h-auto min-h-[420px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-[500px] xl:min-h-[550px] flex flex-col items-center justify-center flex-1 min-w-[320px] sm:min-w-[320px] relative p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7"
      style={{
        transform: 'rotate(0deg)',
        opacity: 1,
        border: 'none',
        borderRadius: '8px',
      }}
    >
      <div className="w-full flex justify-center mb-4 sm:mb-5 md:mb-6 lg:mb-7 xl:mb-8 relative">
        {/* Placeholder to prevent layout shift */}
        <div
          className="w-full max-w-[280px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] h-auto aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl bg-gray-200 animate-pulse ml-2 sm:ml-3 md:ml-4 lg:ml-5 xl:ml-6"
          style={{
            display: imageLoaded ? 'none' : 'block',
          }}
        />

        <Image
          src={imageSrc}
          alt={imageAlt}
          width={420}
          height={420}
          className="w-full max-w-[280px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] h-auto aspect-square rounded-xl sm:rounded-2xl md:rounded-3xl object-cover ml-2 sm:ml-3 md:ml-4 lg:ml-5 xl:ml-6"
          style={{
            transform: 'rotate(0deg)',
            opacity: imageLoaded ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
          }}
          loading={priority ? 'eager' : 'lazy'}
          priority={priority}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)} // Show image even if there's an error
          sizes="(max-width: 640px) 280px, (max-width: 768px) 250px, (max-width: 1024px) 280px, (max-width: 1280px) 320px, 360px"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      <div
        className="w-full max-w-[280px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] h-auto min-h-[35px] sm:min-h-[35px] md:min-h-[40px] lg:min-h-[45px] xl:min-h-[50px] font-['Familjen_Grotesk'] font-normal text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-[0%] text-left text-black flex items-center justify-start mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 px-2 sm:px-3 md:px-4 lg:px-5"
        style={{
          opacity: 1,
        }}
      >
        {name}
      </div>
      <div className="w-full max-w-[280px] sm:max-w-[250px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[360px] flex justify-start">
        <button
          onClick={onLearnMore}
          className="w-[140px] sm:w-[140px] md:w-[160px] lg:w-[180px] xl:w-[200px] h-[40px] sm:h-[40px] md:h-[44px] lg:h-[48px] xl:h-[52px] rounded-full gap-2 sm:gap-2 md:gap-3 lg:gap-3 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] border-none text-white font-['Familjen_Grotesk'] font-medium text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl cursor-pointer flex items-center justify-center whitespace-nowrap"
          style={{
            opacity: 1,
          }}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  )
}
