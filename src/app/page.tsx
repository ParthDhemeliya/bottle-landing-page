'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import Bottle2 from '@/components/svg/bottle/bottle2'
import Bottle3 from '@/components/svg/bottle/Bottle3'
import BottleCap from '@/components/svg/bottle/bottleCap'
import BottleDown from '@/components/svg/bottle/bottleDown'
import Product from '@/components/Product'
import AboutUs from '@/components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import FAQ from './components/FAQ'

export default function Home() {
  const textRef = useRef<HTMLDivElement>(null)
  const subtitleRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const bottle2Ref = useRef<HTMLDivElement>(null)
  const bottle3Ref = useRef<HTMLDivElement>(null)
  const bottleCapRef = useRef<HTMLDivElement>(null)
  const bottleDownRef = useRef<HTMLDivElement>(null)
  const home1Ref = useRef<HTMLDivElement>(null)
  const home3Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0 })

    tl.fromTo(
      bottleCapRef.current,
      {
        top: '347px',
      },
      {
        top: '50px',
        duration: 1.3,
        ease: 'power2.inOut',
      }
    )
      .fromTo(
        bottleDownRef.current,
        {
          top: '347px',
        },
        {
          top: '500px',
          duration: 1.3,
          ease: 'power2.inOut',
        },
        '<'
      )
      .fromTo(
        '.ring-element',
        {
          width: '280px',
          height: '280px',
        },
        {
          width: '600px',
          height: '600px',
          duration: 1.3,
          ease: 'power2.inOut',
        },
        '<'
      )
      .fromTo(
        textRef.current,
        {
          scale: 0.3,
        },
        {
          scale: 1,
          duration: 1.3,
          ease: 'power2.inOut',
        },
        '<'
      )
      .fromTo(
        subtitleRef.current,
        {
          scale: 0.3,
        },
        {
          scale: 1,
          duration: 1.3,
          ease: 'power2.inOut',
        },
        '<'
      )
      .fromTo(
        bottle2Ref.current,
        {
          scale: 0.6,
          y: -30,
        },
        {
          scale: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.inOut',
        },
        '<'
      )
      .fromTo(
        bottle3Ref.current,
        {
          scale: 0.6,
          y: -30,
        },
        {
          scale: 1,
          y: 0,
          duration: 1.3,
          ease: 'power2.inOut',
        },
        '<'
      )
  }, [])

  return (
    <>
      <div
        className="flex flex-col items-center justify-between bg-white"
        style={{ backgroundColor: 'white' }}
      >
        {/* Hero Section */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4">
          <div
            ref={home1Ref}
            className="relative w-full h-full flex items-center justify-center"
            style={{ opacity: 1 }}
          >
            {/* Central Bottle with Cap and Bottom */}
            <div
              style={{
                position: 'absolute',
                width: '186px',
                height: '1243px',
                top: '117px',
                left: '50%',
                transform: 'translateX(-50%)',
                opacity: 1,

                zIndex: 25,
              }}
            >
              <div
                ref={bottleCapRef}
                className="absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] z-30"
                style={{
                  position: 'absolute',
                  top: '347px',
                  left: '58%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 30,
                }}
              >
                <BottleCap />
              </div>

              <div
                ref={bottleDownRef}
                className="absolute w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] xl:w-[220px] xl:h-[220px] z-30"
                style={{
                  position: 'absolute',
                  top: '347px',
                  left: '58%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 30,
                }}
              >
                <BottleDown />
              </div>
            </div>

            <div
              className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] xl:w-[400px] xl:h-[400px] rounded-full ring-element top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              style={{
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
              className="absolute w-full max-w-[1083px] h-auto min-h-[200px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 px-4"
              style={{
                opacity: 1,
                transform: 'scale(0.3) translateY(-40px)',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: 'clamp(36px, 6vw, 72px)',
                lineHeight: 'clamp(40px, 6.5vw, 76px)',
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
              className="absolute w-full max-w-[600px] h-auto min-h-[76px] top-1/2 left-1/2 transform -translate-x-1/2 translate-y-16 md:translate-y-20 z-20 px-4"
              style={{
                opacity: 1,
                transform: 'scale(0.3) translateY(0px)',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: 'clamp(16px, 2.5vw, 24px)',
                lineHeight: '120%',
                letterSpacing: '2%',
                textAlign: 'center',
                color: '#000000',
              }}
            >
              we believe in the power of hydration.
              <br />
              Our mission is simple yet vital
            </div>

            <div
              ref={buttonRef}
              className="absolute w-[175px] h-[49px] top-1/2 left-1/2 transform -translate-x-1/2 translate-y-32 md:translate-y-40 z-20 cursor-pointer"
              style={{
                opacity: 1,
                transform: 'scale(1) translateY(0px)',
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
                fontSize: 'clamp(14px, 2vw, 16px)',
              }}
            >
              Inquiry Now
            </div>

            <div
              ref={bottle2Ref}
              className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] lg:w-[125px] lg:h-[125px] xl:w-[125px] xl:h-[125px] top-[550px] sm:top-[540px] md:top-[530px] lg:top-[525px] xl:top-[525px] left-[60px] sm:left-[70px] md:left-[80px] lg:left-[96px] xl:left-[96px] z-20"
              style={{
                opacity: 1,
                transform: 'rotate(0deg)',
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
                  width: '60px',
                  height: '130px',
                  position: 'absolute',
                  top: '66%',
                  left: '56%',
                  transform: 'translate(-50%, -50%) rotate(-15deg)',
                  opacity: 1,
                }}
              >
                <Bottle2 />
              </div>
            </div>

            <div
              ref={bottle3Ref}
              className="absolute w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[110px] md:h-[110px] lg:w-[125px] lg:h-[125px] xl:w-[125px] xl:h-[125px] top-[550px] sm:top-[540px] md:top-[530px] lg:top-[525px] xl:top-[525px] right-[60px] sm:right-[70px] md:right-[80px] lg:right-[96px] xl:right-[96px] z-20"
              style={{
                opacity: 1,
                transform: 'rotate(0deg)',
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
                  width: '60px',
                  height: '130px',
                  position: 'absolute',
                  top: '56%',
                  left: '46%',
                  transform: 'translate(-50%, -50%) rotate(15deg)',
                  opacity: 1,
                }}
              >
                <Bottle3 />
              </div>
            </div>
          </div>
        </section>
      </div>
      <div
        ref={home3Ref}
        className="w-full h-auto min-h-[860px] flex flex-col md:flex-row"
        style={{
          opacity: 1,
        }}
      >
        {/* left side */}
        <div
          className="w-full md:w-1/2 h-[430px] md:h-[860px] flex items-center justify-center"
          style={{
            background: '#E6D4CB',
            opacity: 1,
          }}
        >
          <Image
            src="/bottle4.jpg"
            alt="Hand holding BOTOL bottle"
            width={400}
            height={860}
            className="w-full h-[300px] md:h-[600px] lg:h-[860px] object-contain"
          />
        </div>

        <div
          className="w-full md:w-1/2 h-[430px] md:h-[860px] flex items-center justify-center"
          style={{
            background: '#20292C',
            opacity: 1,
          }}
        >
          <div className="flex flex-col space-y-4 md:space-y-8 px-4">
            <div className="flex items-center space-x-2 md:space-x-4">
              <div
                className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-[500px] border-2 border-white flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                }}
              >
                <Image
                  src="/vacumebottle.png"
                  alt="Vacuum Bottles"
                  width={70}
                  height={70}
                  className="w-full h-full object-cover rounded-[500px]"
                  style={{
                    borderRadius: '500px',
                    opacity: 1,
                  }}
                />
              </div>
              <span
                className="text-white"
                style={{
                  fontFamily: 'Familjen Grotesk, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '40px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Vacuum Bottles
              </span>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div
                className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-[500px] border-2 border-white flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                }}
              >
                <Image
                  src="/Fridge Bottle & jugs.png"
                  alt="Fridge Bottles & Jugs"
                  width={70}
                  height={70}
                  className="w-full h-full object-cover rounded-[500px]"
                  style={{
                    borderRadius: '500px',
                    opacity: 1,
                  }}
                />
              </div>
              <span
                className="text-white"
                style={{
                  fontFamily: 'Familjen Grotesk, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '40px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Fridge Bottles & Jugs
              </span>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div
                className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-[500px] border-2 border-white flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                }}
              >
                <Image
                  src="/Borosilicate Bottle.png"
                  alt="Borosilicate Bottles"
                  width={70}
                  height={70}
                  className="w-full h-full object-cover rounded-[500px]"
                  style={{
                    borderRadius: '500px',
                    opacity: 1,
                  }}
                />
              </div>
              <span
                className="text-white"
                style={{
                  fontFamily: 'Familjen Grotesk, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '40px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Borosilicate Bottles
              </span>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              <div
                className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-[500px] border-2 border-white flex items-center justify-center overflow-hidden"
                style={{
                  backgroundColor: '#FFFFFF',
                }}
              >
                <Image
                  src="/kettles.png"
                  alt="Kettles"
                  width={70}
                  height={70}
                  className="w-full h-full object-cover rounded-[500px]"
                  style={{
                    borderRadius: '500px',
                    opacity: 1,
                  }}
                />
              </div>
              <span
                className="text-white"
                style={{
                  fontFamily: 'Familjen Grotesk, sans-serif',
                  fontWeight: 400,
                  fontStyle: 'normal',
                  fontSize: '40px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                }}
              >
                Kettles
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative w-full max-w-[1320px] h-auto min-h-[1258px] mx-auto bg-white p-4 md:p-6 lg:p-8"
        style={{
          transform: 'rotate(0deg)',
          opacity: 1,
        }}
      >
        {/* Header Section */}
        <div
          className="w-full h-auto min-h-[120px] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6 lg:gap-8 p-4 md:p-6"
          style={{
            transform: 'rotate(0deg)',
            opacity: 1,
          }}
        >
          <div
            className="w-full max-w-[538px] h-auto min-h-[120px] flex flex-col justify-center text-center md:text-left"
            style={{
              transform: 'rotate(0deg)',
              opacity: 1,
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
            className="w-auto min-w-[177px] h-[49px] flex items-center justify-center"
            style={{
              transform: 'rotate(0deg)',
              opacity: 1,
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
          className="w-full h-auto min-h-[400px] md:min-h-[539px] relative bg-white flex flex-col md:flex-row justify-center items-start flex-wrap gap-4 md:gap-6 lg:gap-8 p-4 md:p-6"
          style={{
            transform: 'rotate(0deg)',
            opacity: 1,
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
            imageSrc="/dummyBottle3 (2).jpg"
            imageAlt="Bottle 3"
            name="Big Bull 1300"
            onLearnMore={() =>
              console.log('Learn more clicked for Big Bull 1300')
            }
          />
        </div>

        {/* Product 2 Section */}
        <div
          className="w-full h-auto min-h-[400px] md:min-h-[539px] relative bg-white flex flex-col md:flex-row justify-center items-start flex-wrap gap-4 md:gap-6 lg:gap-8 p-4 md:p-6"
          style={{
            transform: 'rotate(0deg)',
            opacity: 1,
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
        className="w-full h-auto min-h-[762px] relative overflow-hidden"
        style={{
          transform: 'rotate(0deg)',
          opacity: 0.8,
          backgroundImage: 'url("aboutusbackgound.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#2d3748',
          color: '#000000CC',
          margin: '0',
          padding: '0',
        }}
      >
        <AboutUs />
      </div>

      {/* FAQ Section */}
      <div
        className="w-full max-w-[1510px] h-auto min-h-[886px] bg-[#F3F5F6] relative mx-auto"
        style={{
          transform: 'rotate(0deg)',
          opacity: 1,
        }}
      >
        <FAQ />
      </div>

      {/* Contact Us Section */}
      <ContactUs />

      {/* Footer Section */}
      <Footer />
    </>
  )
}
