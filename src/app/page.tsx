'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import BottleCap from '@/components/svg/bottle/bottleCap'
import BottleDown from '@/components/svg/bottle/bottleDown'
import Bottle2 from '@/components/svg/bottle/bottle2'
import Bottle3 from '@/components/svg/bottle/Bottle3'

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
      const home1Element = home1Ref.current
      const home3Element = home3Ref.current

      if (home1Element && home3Element) {
        const home1Top = home1Element.offsetTop
        const home3Top = home3Element.offsetTop
        const windowHeight = window.innerHeight

        // Calculate scroll progress based on when home3 is fully in view
        const totalDistance = home3Top - home1Top - windowHeight
        const currentProgress = Math.max(
          0,
          Math.min(scrollY - home1Top, totalDistance)
        )
        const scrollProgress =
          totalDistance > 0 ? currentProgress / totalDistance : 0

        // Apply easing to slow down movement visually
        const easedProgress = Math.pow(scrollProgress, 0.6) // slower easing

        // Animate bottle cap to come down and close the bottle
        if (easedProgress >= 0 && easedProgress <= 1) {
          const capStartTop = 117
          const downStartTop = 567
          const meetingPoint = downStartTop // Cap meets the bottom where it is

          // Only move the cap down to meet the bottom, then stop
          const capTargetTop = Math.min(
            capStartTop + (meetingPoint - capStartTop) * easedProgress,
            meetingPoint
          )

          gsap.set(bottleCapRef.current, {
            top: `${capTargetTop}px`,
          })

          // Keep bottle bottom in place (don't move it up)
          // Bottle bottom stays at downStartTop (567px)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call to set positions

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between bg-white">
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
        className="w-[1512px] h-[860px]"
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
    </>
  )
}
