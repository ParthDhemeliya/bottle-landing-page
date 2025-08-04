'use client'

import { useRef, useEffect } from 'react'

export default function AboutUs() {
  const aboutUsRef = useRef<HTMLDivElement>(null)

  // Debug About Us section visibility
  useEffect(() => {
    console.log('AboutUs component mounted')
    console.log('About Us section ref:', aboutUsRef.current)
    if (aboutUsRef.current) {
      console.log('About Us section dimensions:', {
        offsetWidth: aboutUsRef.current.offsetWidth,
        offsetHeight: aboutUsRef.current.offsetHeight,
        clientWidth: aboutUsRef.current.clientWidth,
        clientHeight: aboutUsRef.current.clientHeight,
        getBoundingClientRect: aboutUsRef.current.getBoundingClientRect(),
      })
    }
  }, [])

  return (
    <>
      {/* Left Content Area - About Us Text */}
      <div
        style={{
          width: '650px',
          height: '480px',
          transform: 'rotate(0deg)',
          opacity: 1,
          position: 'absolute',
          top: '80px',
          left: '95px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '40px',
          zIndex: 2,
        }}
      >
        <div style={{ color: 'white', textAlign: 'left' }}>
          <h1
            style={{
              width: '231px',
              height: '75px',
              transform: 'rotate(0deg)',
              opacity: 1,
              fontFamily: 'Familjen Grotesk, sans-serif',
              fontWeight: 600,
              fontStyle: 'normal',
              fontSize: '60px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#FFFFFF',
              margin: 0,
              padding: 0,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            About us
          </h1>

          <h2
            style={{
              fontSize: '16px',
              fontWeight: '300',
              marginBottom: '20px',
              color: 'white',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            HEALTH, HAPPINESS, & SUSTAINABILITY
          </h2>

          <p
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              marginBottom: '30px',
              color: 'white',
              maxWidth: '500px',
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <button
            style={{
              width: '190px',
              height: '49px',
              transform: 'rotate(0deg)',
              opacity: 1,
              borderRadius: '100px',
              gap: '10px',
              paddingTop: '12px',
              paddingRight: '36px',
              paddingBottom: '12px',
              paddingLeft: '36px',
              background: 'linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%)',
              color: 'white',
              border: 'none',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Right Content Area - Numbered Points */}
      <div
        style={{
          height: '602px',
          position: 'absolute',
          top: '80px',
          left: '847px',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          padding: '40px',
          zIndex: 2,
        }}
      >
        <div style={{ color: 'white', width: '110%' }}>
          <div
            className="w-[386px] h-[100px] rotate-0 opacity-100 rounded-[24px] gap-[10px] p-6 flex items-center relative mb-6"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
              border: '1px solid #FFFFFF',
              backdropFilter: 'blur(20px)',
              boxShadow: '0px 8px 20px 0px #00000033',
            }}
          >
            <div className="w-[34px] h-[75px] rotate-0 opacity-100 font-['Familjen_Grotesk'] font-semibold text-[60px] leading-[100%] tracking-[0%] text-white flex items-center justify-center mr-[30px]">
              1
            </div>
            <span
              style={{
                width: '274px',
                height: '80px',
                transform: 'rotate(0deg)',
                opacity: 1,
                position: 'absolute',
                left: '88px',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '32px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              Wide Mouth Bottles To Clean Easily
            </span>
          </div>

          <div
            className="w-[100%] h-[100px] rotate-0 opacity-100 rounded-[24px] gap-[10px] p-6 flex items-center relative mb-6"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
              border: '1px solid #FFFFFF',
              backdropFilter: 'blur(20px)',
              boxShadow: '0px 8px 20px 0px #00000033',
            }}
          >
            <div className="w-[34px] h-[75px] rotate-0 opacity-100 font-['Familjen_Grotesk'] font-semibold text-[60px] leading-[100%] tracking-[0%] text-white flex items-center justify-center mr-[30px]">
              2
            </div>
            <span
              style={{
                // width: '274px',
                height: '80px',
                transform: 'rotate(0deg)',
                opacity: 1,
                position: 'absolute',
                left: '88px',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '32px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              Insulated Bottles For Hot And Cold Technology
            </span>
          </div>

          <div
            className="w-[386px] h-[100px] rotate-0 opacity-100 rounded-[24px] gap-[10px] p-6 flex items-center relative mb-6"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
              border: '1px solid #FFFFFF',
              backdropFilter: 'blur(20px)',
              boxShadow: '0px 8px 20px 0px #00000033',
            }}
          >
            <div className="w-[34px] h-[75px] rotate-0 opacity-100 font-['Familjen_Grotesk'] font-semibold text-[60px] leading-[100%] tracking-[0%] text-white flex items-center justify-center mr-[30px]">
              3
            </div>
            <span
              style={{
                width: '274px',
                height: '80px',
                transform: 'rotate(0deg)',
                opacity: 1,
                position: 'absolute',
                left: '88px',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '32px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              Variation In Sizes, Styles, And Material
            </span>
          </div>

          <div
            className="w-[386px] h-[100px] rotate-0 opacity-100 rounded-[24px] gap-[10px] p-6 flex items-center relative mb-6"
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
              border: '1px solid #FFFFFF',
              backdropFilter: 'blur(20px)',
              boxShadow: '0px 8px 20px 0px #00000033',
            }}
          >
            <div className="w-[34px] h-[75px] rotate-0 opacity-100 font-['Familjen_Grotesk'] font-semibold text-[60px] leading-[100%] tracking-[0%] text-white flex items-center justify-center mr-[30px]">
              4
            </div>
            <span
              style={{
                width: '274px',
                height: '80px',
                transform: 'rotate(0deg)',
                opacity: 1,
                position: 'absolute',
                left: '88px',
                fontFamily: 'Familjen Grotesk, sans-serif',
                fontWeight: 600,
                fontStyle: 'normal',
                fontSize: '32px',
                lineHeight: '100%',
                letterSpacing: '0%',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}
            >
              Made In India To Serve Authenticity
            </span>
          </div>
        </div>
      </div>
    </>
  )
}
