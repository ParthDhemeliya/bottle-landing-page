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
    <div
      ref={aboutUsRef}
      className="relative w-full min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12 md:py-16 lg:py-20"
    >
      {/* Mobile Layout - Stacked */}
      <div className="block lg:hidden">
        {/* About Us Text Section */}
        <div className="w-full mb-8 sm:mb-12">
          <div className="w-full max-w-full rounded-lg sm:rounded-xl flex flex-col items-start justify-center p-4 sm:p-6 md:p-8">
            <div style={{ color: 'white', textAlign: 'left' }}>
              <h1 className="w-full font-['Familjen_Grotesk'] font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-[0%] text-white m-0 p-0 flex items-center mb-2 sm:mb-3">
                About us
              </h1>

              <h2 className="text-xs sm:text-sm md:text-base font-light mb-3 sm:mb-4 md:mb-5 text-white uppercase tracking-wider">
                HEALTH, HAPPINESS, & SUSTAINABILITY
              </h2>

              <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 text-white max-w-full">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>

              <button className="w-full sm:w-auto min-w-[140px] sm:min-w-[160px] md:min-w-[190px] h-[40px] sm:h-[44px] md:h-[49px] rounded-full gap-2 sm:gap-3 px-4 sm:px-6 md:px-9 py-2 sm:py-3 md:py-4 bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white border-none text-sm sm:text-base font-semibold cursor-pointer uppercase flex items-center justify-center">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>

        {/* Numbered Points Section */}
        <div className="w-full">
          <div className="text-white w-full max-w-full space-y-4 sm:space-y-6">
            {/* Point 1 */}
            <div
              className="w-full h-auto min-h-[80px] sm:min-h-[100px] rounded-xl sm:rounded-2xl gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 flex items-center relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
                border: '1px solid #FFFFFF',
                backdropFilter: 'blur(20px)',
                boxShadow: '0px 8px 20px 0px #00000033',
              }}
            >
              <div className="w-[20px] sm:w-[24px] md:w-[34px] h-[40px] sm:h-[50px] md:h-[75px] font-['Familjen_Grotesk'] font-semibold text-2xl sm:text-3xl md:text-[60px] leading-none tracking-[0%] text-white flex items-center justify-center mr-3 sm:mr-4 md:mr-[30px] flex-shrink-0">
                1
              </div>
              <span className="font-['Familjen_Grotesk'] font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight tracking-[0%] text-white flex items-center">
                Wide Mouth Bottles To Clean Easily
              </span>
            </div>

            {/* Point 2 */}
            <div
              className="w-full h-auto min-h-[80px] sm:min-h-[100px] rounded-xl sm:rounded-2xl gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 flex items-center relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
                border: '1px solid #FFFFFF',
                backdropFilter: 'blur(20px)',
                boxShadow: '0px 8px 20px 0px #00000033',
              }}
            >
              <div className="w-[20px] sm:w-[24px] md:w-[34px] h-[40px] sm:h-[50px] md:h-[75px] font-['Familjen_Grotesk'] font-semibold text-2xl sm:text-3xl md:text-[60px] leading-none tracking-[0%] text-white flex items-center justify-center mr-3 sm:mr-4 md:mr-[30px] flex-shrink-0">
                2
              </div>
              <span className="font-['Familjen_Grotesk'] font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight tracking-[0%] text-white flex items-center">
                Insulated Bottles For Hot And Cold Technology
              </span>
            </div>

            {/* Point 3 */}
            <div
              className="w-full h-auto min-h-[80px] sm:min-h-[100px] rounded-xl sm:rounded-2xl gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 flex items-center relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
                border: '1px solid #FFFFFF',
                backdropFilter: 'blur(20px)',
                boxShadow: '0px 8px 20px 0px #00000033',
              }}
            >
              <div className="w-[20px] sm:w-[24px] md:w-[34px] h-[40px] sm:h-[50px] md:h-[75px] font-['Familjen_Grotesk'] font-semibold text-2xl sm:text-3xl md:text-[60px] leading-none tracking-[0%] text-white flex items-center justify-center mr-3 sm:mr-4 md:mr-[30px] flex-shrink-0">
                3
              </div>
              <span className="font-['Familjen_Grotesk'] font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight tracking-[0%] text-white flex items-center">
                Variation In Sizes, Styles, And Material
              </span>
            </div>

            {/* Point 4 */}
            <div
              className="w-full h-auto min-h-[80px] sm:min-h-[100px] rounded-xl sm:rounded-2xl gap-2 sm:gap-3 p-3 sm:p-4 md:p-6 flex items-center relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
                border: '1px solid #FFFFFF',
                backdropFilter: 'blur(20px)',
                boxShadow: '0px 8px 20px 0px #00000033',
              }}
            >
              <div className="w-[20px] sm:w-[24px] md:w-[34px] h-[40px] sm:h-[50px] md:h-[75px] font-['Familjen_Grotesk'] font-semibold text-2xl sm:text-3xl md:text-[60px] leading-none tracking-[0%] text-white flex items-center justify-center mr-3 sm:mr-4 md:mr-[30px] flex-shrink-0">
                4
              </div>
              <span className="font-['Familjen_Grotesk'] font-semibold text-base sm:text-lg md:text-2xl lg:text-3xl leading-tight tracking-[0%] text-white flex items-center">
                Made In India To Serve Authenticity
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden lg:flex w-full h-auto min-h-[600px] relative">
        {/* Left Content Area - About Us Text */}
        <div className="w-1/2 max-w-[650px] h-auto min-h-[480px] flex flex-col items-start justify-center p-6 lg:p-8 xl:p-10 z-10">
          <div style={{ color: 'white', textAlign: 'left' }}>
            <h1 className="w-full max-w-[300px] lg:max-w-[350px] xl:max-w-[400px] h-auto min-h-[75px] font-['Familjen_Grotesk'] font-semibold text-5xl lg:text-6xl xl:text-7xl leading-none tracking-[0%] text-white m-0 p-0 flex items-center mb-4 whitespace-nowrap">
              About us
            </h1>

            <h2 className="text-base lg:text-lg xl:text-xl font-light mb-5 lg:mb-6 xl:mb-8 text-white uppercase tracking-wider">
              HEALTH, HAPPINESS, & SUSTAINABILITY
            </h2>

            <p className="text-base lg:text-lg xl:text-xl leading-relaxed mb-8 lg:mb-10 xl:mb-12 text-white max-w-[500px] lg:max-w-[550px] xl:max-w-[600px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <button className="w-[190px] lg:w-[200px] xl:w-[220px] h-[49px] lg:h-[52px] xl:h-[56px] rounded-full gap-3 px-9 lg:px-10 xl:px-12 py-4 lg:py-5 xl:py-6 bg-gradient-to-r from-[#00D1FF] to-[#1A83FF] text-white border-none text-base lg:text-lg xl:text-xl font-semibold cursor-pointer uppercase flex items-center justify-center whitespace-nowrap">
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Right Content Area - Numbered Points */}
        <div className="w-1/2 h-auto min-h-[602px] flex flex-col items-start justify-start p-6 lg:p-8 xl:p-10 z-10">
          <div className="text-white w-full max-w-[500px] lg:max-w-[550px] xl:max-w-[600px] space-y-6 lg:space-y-8 xl:space-y-10">
            {/* Point 1 */}
            <div
              className="w-full h-auto min-h-[100px] lg:min-h-[120px] xl:min-h-[140px] rounded-2xl lg:rounded-3xl gap-3 lg:gap-4 p-6 lg:p-8 xl:p-10 flex items-center relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
                border: '1px solid #FFFFFF',
                backdropFilter: 'blur(20px)',
                boxShadow: '0px 8px 20px 0px #00000033',
              }}
            >
              <div className="w-[34px] lg:w-[40px] xl:w-[50px] h-[75px] lg:h-[85px] xl:h-[95px] font-['Familjen_Grotesk'] font-semibold text-[60px] lg:text-[70px] xl:text-[80px] leading-none tracking-[0%] text-white flex items-center justify-center mr-[30px] lg:mr-[35px] xl:mr-[40px] flex-shrink-0">
                1
              </div>
              <span className="font-['Familjen_Grotesk'] font-semibold text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-[0%] text-white flex items-center">
                Wide Mouth Bottles To Clean Easily
              </span>
            </div>

            {/* Point 2 */}
            <div
              className="w-full h-auto min-h-[100px] lg:min-h-[120px] xl:min-h-[140px] rounded-2xl lg:rounded-3xl gap-3 lg:gap-4 p-6 lg:p-8 xl:p-10 flex items-center relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
                border: '1px solid #FFFFFF',
                backdropFilter: 'blur(20px)',
                boxShadow: '0px 8px 20px 0px #00000033',
              }}
            >
              <div className="w-[34px] lg:w-[40px] xl:w-[50px] h-[75px] lg:h-[85px] xl:h-[95px] font-['Familjen_Grotesk'] font-semibold text-[60px] lg:text-[70px] xl:text-[80px] leading-none tracking-[0%] text-white flex items-center justify-center mr-[30px] lg:mr-[35px] xl:mr-[40px] flex-shrink-0">
                2
              </div>
              <span className="font-['Familjen_Grotesk'] font-semibold text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-[0%] text-white flex items-center">
                Insulated Bottles For Hot And Cold Technology
              </span>
            </div>

            {/* Point 3 */}
            <div
              className="w-full h-auto min-h-[100px] lg:min-h-[120px] xl:min-h-[140px] rounded-2xl lg:rounded-3xl gap-3 lg:gap-4 p-6 lg:p-8 xl:p-10 flex items-center relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
                border: '1px solid #FFFFFF',
                backdropFilter: 'blur(20px)',
                boxShadow: '0px 8px 20px 0px #00000033',
              }}
            >
              <div className="w-[34px] lg:w-[40px] xl:w-[50px] h-[75px] lg:h-[85px] xl:h-[95px] font-['Familjen_Grotesk'] font-semibold text-[60px] lg:text-[70px] xl:text-[80px] leading-none tracking-[0%] text-white flex items-center justify-center mr-[30px] lg:mr-[35px] xl:mr-[40px] flex-shrink-0">
                3
              </div>
              <span className="font-['Familjen_Grotesk'] font-semibold text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-[0%] text-white flex items-center">
                Variation In Sizes, Styles, And Material
              </span>
            </div>

            {/* Point 4 */}
            <div
              className="w-full h-auto min-h-[100px] lg:min-h-[120px] xl:min-h-[140px] rounded-2xl lg:rounded-3xl gap-3 lg:gap-4 p-6 lg:p-8 xl:p-10 flex items-center relative"
              style={{
                background:
                  'linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(0, 0, 0, 0.1) 100%, rgba(255, 255, 255, 0.2) 100%)',
                border: '1px solid #FFFFFF',
                backdropFilter: 'blur(20px)',
                boxShadow: '0px 8px 20px 0px #00000033',
              }}
            >
              <div className="w-[34px] lg:w-[40px] xl:w-[50px] h-[75px] lg:h-[85px] xl:h-[95px] font-['Familjen_Grotesk'] font-semibold text-[60px] lg:text-[70px] xl:text-[80px] leading-none tracking-[0%] text-white flex items-center justify-center mr-[30px] lg:mr-[35px] xl:mr-[40px] flex-shrink-0">
                4
              </div>
              <span className="font-['Familjen_Grotesk'] font-semibold text-2xl lg:text-3xl xl:text-4xl leading-tight tracking-[0%] text-white flex items-center">
                Made In India To Serve Authenticity
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
