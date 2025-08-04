'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import BottleCap from '@/components/svg/bottle/bottleCap'
import BottleDown from '@/components/svg/bottle/bottleDown'
import Bottle2 from '@/components/svg/bottle/bottle2'
import Bottle3 from '@/components/svg/bottle/Bottle3'
import Product from '@/components/Product'
import AboutUs from '@/components/AboutUs'
// import ContactUs from '@/components/ContactUs'
import ContactUs from './components/ContactUs'
import { relative } from 'path'
import FAQ from './components/FAQ'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const bottleCapRef = useRef<HTMLDivElement>(null)
  const bottleDownRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const bottle2Ref = useRef<HTMLDivElement>(null)
  const bottle3Ref = useRef<HTMLDivElement>(null)
  const home1Ref = useRef<HTMLDivElement>(null)
  const home3Ref = useRef<HTMLDivElement>(null)
  const animationStoppedRef = useRef(false)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1.2 })

    // Initial bottle opening animation
    tl.fromTo(
      bottleCapRef.current,
      { top: '347px', left: '663px', width: '186px', height: '793px' },
      {
        top: '117px',
        left: '663px',
        width: '186px',
        height: '793px',
        duration: 2.4,
        ease: 'power2.inOut',
      }
    )
      .fromTo(
        bottleDownRef.current,
        { top: '347px', left: '663px', width: '186px', height: '793px' },
        {
          top: '567px',
          left: '663px',
          width: '186px',
          height: '793px',
          duration: 2.4,
          ease: 'power2.inOut',
        },
        '<'
      )
      .to(
        '.ring-element',
        {
          width: '600px',
          height: '600px',
          top: '181px',
          left: '456px',
          duration: 2.4,
          ease: 'power2.inOut',
        },
        '<'
      )
      .to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
        },
        '-=1.2'
      )
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.0,
          ease: 'back.out(1.5)',
        },
        '-=0.9'
      )
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'back.out(1.3)',
        },
        '-=0.7'
      )
      .to(
        bottle2Ref.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        },
        '-=0.6'
      )
      .to(
        bottle3Ref.current,
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.6,
          ease: 'back.out(1.7)',
        },
        '-=0.6'
      )
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const cap = bottleCapRef.current
      const bottom = bottleDownRef.current
      const nextSection = home3Ref.current

      if (!cap || !bottom || !nextSection) return

      // Start animation when scrollY reaches 200px
      const animationStart = 200

      // Get the absolute position of the next section (home3Ref)
      const nextSectionTop =
        nextSection.getBoundingClientRect().top + window.scrollY

      // Stop animation 100px *before* that section reaches
      const animationEnd = nextSectionTop - 100

      // Clamp scroll within the animation range
      const clamped = Math.min(Math.max(scrollY, animationStart), animationEnd)

      // Calculate scroll progress (0 to 1)
      const rawProgress =
        (clamped - animationStart) / (animationEnd - animationStart)
      const progress = Math.pow(rawProgress, 0.6) // Ease

      // Animate the bottle parts
      const capStart = 117
      const capEnd = 347
      const downStart = 567
      const downEnd = 347

      const capTop = capStart + (capEnd - capStart) * progress
      const downTop = downStart + (downEnd - downStart) * progress

      gsap.set(cap, { top: `${capTop}px` })
      gsap.set(bottom, { top: `${downTop}px` })

      // Debug log
      // console.log({ scrollY, nextSectionTop, capTop, downTop })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // initial call

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div
        className="flex flex-col items-center justify-between bg-white"
        style={{ backgroundColor: 'white' }}
      >
        {/* Hero Section */}
        <section className="relative w-full max-w-6xl flex flex-col items-center text-center px-4">
          <div
            ref={home1Ref}
            className="relative w-[1512px] h-[860px] flex items-center justify-center"
            style={{ opacity: 1 }}
          >
            <div
              className="absolute w-[400px] h-[400px] rounded-full ring-element"
              style={{
                top: '281px',
                bottom: '176px',
                left: '556px',
                right: '556px',
                background:
                  'conic-gradient(from 0deg, #4DFBFB, #788EFF, #4DFBFB)',
                padding: '8px',
                opacity: 1,
              }}
            >
              <div
                className="w-full h-full rounded-full"
                style={{ background: '#FFFFFF' }}
              />
            </div>

            <div
              ref={textRef}
              className="absolute w-[1083px] h-[200px] top-[285px] left-[215px] z-20"
              style={{
                opacity: 0,
                transform: 'scale(0.3) translateY(50px)',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '96px',
                lineHeight: '100px',
                letterSpacing: '2%',
                textAlign: 'center',
                color: '#000000',
              }}
            >
              The Ultimate Companion
              <br />
              for Hydration
            </div>

            <div
              ref={subtitleRef}
              className="absolute w-[482px] h-[76px] top-[495px] left-[515px] z-20"
              style={{
                opacity: 0,
                transform: 'scale(0.3) translateY(30px)',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '30px',
                lineHeight: '100%',
                letterSpacing: '2%',
                textAlign: 'center',
                color: '#000000',
              }}
            >
              we believe in the power of hydration. Our mission is simple yet
              vital
            </div>

            <div
              ref={buttonRef}
              className="absolute w-[175px] h-[49px] top-[601px] left-[669px] z-20 cursor-pointer"
              style={{
                opacity: 0,
                transform: 'scale(0.3) translateY(100px)',
                borderRadius: '100px',
                padding: '12px 36px',
                gap: '10px',
                background: 'linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 500,
                fontSize: '16px',
              }}
            >
              Inquiry Now
            </div>

            <div
              ref={bottle2Ref}
              className="absolute w-[125px] h-[125px] top-[675px] left-[96px] z-20"
              style={{
                opacity: 0,
                transform: 'scale(0.3) translateX(-200px)',
                borderRadius: '260.42px',
                background: 'linear-gradient(180deg, #4DFBFB 0%, #788EFF 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="relative"
                style={{
                  width: '31.66767459127246px',
                  height: '83.33333475271615px',
                  position: 'absolute',
                  top: '18.37px',
                  left: '36.46px',
                  transform: 'rotate(-15deg)',
                  opacity: 1,
                }}
              >
                <Bottle2 />
              </div>
            </div>

            <div
              ref={bottle3Ref}
              className="absolute w-[125px] h-[125px] top-[675px] left-[1291px] z-20"
              style={{
                opacity: 0,
                transform: 'scale(0.3) translateX(200px)',
                borderRadius: '260.42px',
                background: 'linear-gradient(180deg, #4DFBFB 0%, #788EFF 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                className="relative"
                style={{
                  width: '37.26490733439738px',
                  height: '104.16666271884937px',
                  position: 'absolute',
                  top: '7.29px',
                  left: '31.37px',
                  transform: 'rotate(15deg)',
                  opacity: 1,
                }}
              >
                <Bottle3 />
              </div>
            </div>

            {/* Bottle Cap - Sticky */}
            <div
              ref={bottleCapRef}
              className="absolute w-[186px] h-[793px] left-[663px] z-30"
              style={{ opacity: 1, position: 'fixed', top: '347px' }}
            >
              <BottleCap />
            </div>

            {/* Bottle Down - Sticky */}
            <div
              ref={bottleDownRef}
              className="absolute w-[186px] h-[793px] left-[663px] z-30"
              style={{ opacity: 1, position: 'fixed', top: '347px' }}
            >
              <BottleDown />
            </div>
          </div>
        </section>
      </div>
      <div
        ref={home3Ref}
        className="w-[1512px] h-[860px] "
        style={{
          opacity: 1,
        }}
      >
        <div
          className="absolute left-0 w-[756px] h-[860px] flex items-center justify-center"
          style={{
            background: '#E6D4CB',
            opacity: 1,
          }}
        >
          <Image
            src="/bottle4.jpg"
            alt="Hand holding BOTOL bottle"
            width={400}
            height={600}
            className="w-auto h-[600px] object-contain"
          />
        </div>

        <div
          className="absolute right-0 w-[756px] h-[860px] flex items-center justify-center"
          style={{
            left: '756px',
            background: '#20292C',
            opacity: 1,
          }}
        >
          <div className="flex flex-col space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-6 h-8 bg-white rounded-sm"></div>
              </div>
              <span className="text-white font-medium">Vacuum Bottles</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-6 h-10 bg-white rounded-sm"></div>
              </div>
              <span className="text-white font-medium">
                Fridge Bottles & Jugs
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-7 h-8 bg-white rounded-sm"></div>
              </div>
              <span className="text-white font-medium">
                Borosilicate Bottles
              </span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-8 h-6 bg-white rounded-sm"></div>
              </div>
              <span className="text-white font-medium">Kettles</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute"
        style={{
          width: '100%',
          maxWidth: '1320px',
          height: 'auto',
          minHeight: '1258px',
          transform: 'rotate(0deg) translateX(-50%)',
          opacity: 1,
          top: '1800px',
          left: '50%',
          background: 'white',
          padding: '20px',
        }}
      >
        {/* Header Section */}
        <div
          style={{
            width: '100%',
            height: 'auto',
            minHeight: '120px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            transform: 'rotate(0deg)',
            opacity: 1,

            padding: '20px',
            flexWrap: 'wrap',
            gap: '20px',
          }}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '538px',
              height: 'auto',
              minHeight: '120px',
              transform: 'rotate(0deg)',
              opacity: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: 'clamp(32px, 5vw, 60px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: 'black',
                marginBottom: '8px',
              }}
            >
              Hydration Essentials
            </div>
            <div
              style={{
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(16px, 2vw, 24px)',
                lineHeight: '45px',
                letterSpacing: '0%',
                color: 'black',
              }}
            >
              Discover Our Range of Premium Water Bottles
            </div>
          </div>

          <div
            style={{
              width: 'auto',
              minWidth: '177px',
              height: '49px',
              transform: 'rotate(0deg)',
              opacity: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <button
              style={{
                width: '100%',
                minWidth: '177px',
                height: '49px',
                transform: 'rotate(0deg)',
                opacity: 1,
                borderRadius: '100px',
                gap: '10px',
                padding: '12px 36px',
                background: 'linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%)',
                border: 'none',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: 'clamp(14px, 1.5vw, 20px)',
                lineHeight: '100%',
                letterSpacing: '0%',
                textTransform: 'uppercase',
                color: 'white',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              View More
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div
          style={{
            width: '100%',
            height: 'auto',
            minHeight: 'clamp(400px, 50vw, 539px)',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'relative',
            top: '0',
            background: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 'clamp(10px, 2vw, 20px)',
            padding: 'clamp(10px, 2vw, 20px)',
          }}
        >
          <Product
            imageSrc="/dummyBottle1.jpg"
            imageAlt="Bottle 1"
            name="Rainbow 600"
            onLearnMore={() =>
              console.log('Learn more clicked for Rainbow 600')
            }
          />

          <Product
            imageSrc="/dummyBottle2.jpg"
            imageAlt="Bottle 2"
            name="Rio 650"
            onLearnMore={() => console.log('Learn more clicked for Rio 650')}
          />

          <Product
            imageSrc="/dummyBottle3.jpg"
            imageAlt="Bottle 3"
            name="Big Bull 1300"
            onLearnMore={() =>
              console.log('Learn more clicked for Big Bull 1300')
            }
          />
        </div>

        {/* Product 2 Section */}
        <div
          style={{
            width: '100%',
            height: 'auto',
            minHeight: 'clamp(400px, 50vw, 539px)',
            transform: 'rotate(0deg)',
            opacity: 1,
            position: 'relative',
            top: '0',
            background: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: 'clamp(10px, 2vw, 20px)',
            padding: 'clamp(10px, 2vw, 20px)',
          }}
        >
          <Product
            imageSrc="/dummyBottle4.jpg"
            imageAlt="Bottle 1"
            name="Rome 600"
            onLearnMore={() => console.log('Learn more clicked for Rome 600')}
          />

          <Product
            imageSrc="/dummyBottle1.jpg"
            imageAlt="Bottle 2"
            name="Rainbow 600"
            onLearnMore={() =>
              console.log('Learn more clicked for Rainbow 600')
            }
          />

          <Product
            imageSrc="/dummyBottle5.jpg"
            imageAlt="Bottle 3"
            name="Sweetie 200"
            onLearnMore={() =>
              console.log('Learn more clicked for Sweetie 200')
            }
          />
        </div>
      </div>

      {/* About Us Section - Full Width */}
      <div
        style={{
          width: '100vw',
          height: '762px',
          transform: 'rotate(0deg)',
          opacity: 0.8,
          position: 'relative',
          backgroundImage: 'url("aboutusbackgound.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#2d3748',
          color: '#000000CC',
          margin: '0',
          top: '1350px',
          padding: '0',
          overflow: 'hidden',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
        }}
      >
        <AboutUs />
      </div>

      {/* FAQ Section */}
      <div
        style={{
          width: '1510px',
          height: '886px',
          top: '3980px',
          left: '1px',
          transform: 'rotate(0deg)',
          opacity: 1,
          background: '#F3F5F6',
          position: 'absolute',
        }}
      >
        <FAQ />
      </div>

      {/* Contact Us Section */}

      <ContactUs />
    </>
  )
}
