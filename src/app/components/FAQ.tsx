import React, { useState } from 'react'

const FAQ = () => {
  const [expandedItem, setExpandedItem] = useState(0)

  const faqItems = [
    {
      id: 1,
      question: 'Where can I watch?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 2,
      question: 'Where can I watch?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 3,
      question: 'Where can I watch?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      question: 'Where can I watch?',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]

  const toggleItem = (index: number) => {
    setExpandedItem(expandedItem === index ? -1 : index)
  }

  return (
    <div
      className="top-20 md:top-[80px] w-full relative bg-white rounded-lg shadow-lg overflow-hidden max-w-[1320px] min-h-[726px] mx-auto p-4 md:p-6 lg:p-8"
      style={{
        transform: 'rotate(0deg)',
        opacity: 1,
      }}
    >
      {faqItems.map((item, index) => (
        <div
          key={item.id}
          className="w-full min-h-[162px] md:min-h-[231px] border-b border-gray-200 last:border-b-0 p-4 md:p-6 lg:p-8 flex flex-col bg-white transition-all duration-300 ease-in-out"
          style={{
            minHeight: expandedItem === index ? '231px' : '162px',
          }}
        >
          {/* Fixed Header Row - Question and Button */}
          <div
            className="flex items-center justify-between h-12 md:h-[48px] mb-0 md:mb-4"
            style={{
              marginBottom: expandedItem === index ? '15px' : '0',
            }}
          >
            <div className="flex items-center gap-4 md:gap-5 flex-1 relative top-8 md:top-14 px-4 md:px-8 lg:px-16">
              <div
                className="font-bold text-2xl md:text-4xl lg:text-5xl leading-tight tracking-wide text-gray-400 flex items-center justify-center"
                style={{
                  // background: '#3C3C4380',
                  minWidth: 'clamp(40px, 5vw, 60px)',
                }}
              >
                {String(item.id).padStart(2, '0')}
              </div>
              <div
                style={{
                  // fontFamily: 'Familjen Grotesk',
                  fontWeight: 700,
                  fontSize: 'clamp(20px, 3vw, 32px)',
                  lineHeight: '120%',
                  letterSpacing: '0px',
                  verticalAlign: 'middle',
                  // background: '#201F1F',
                  color: '#374151',
                  width: '100%',
                  maxWidth: '1091px',
                  minHeight: '48px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <span>{item.question}</span>
                <button
                  onClick={() => toggleItem(index)}
                  style={{
                    width: 'clamp(36px, 4vw, 48px)',
                    height: 'clamp(36px, 4vw, 48px)',
                    borderRadius: '50%',
                    border: 'none',
                    background:
                      expandedItem === index
                        ? 'linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%)'
                        : '#f3f4f6',
                    color: expandedItem === index ? 'white' : '#374151',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                    transform: 'rotate(0deg)',
                    opacity: 1,
                    gap: '10px',
                    flexShrink: 0,
                  }}
                >
                  {expandedItem === index ? '×' : '+'}
                </button>
              </div>
            </div>
          </div>

          {/* Answer Section - Only shown when expanded */}
          {expandedItem === index && (
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: 'clamp(15px, 2vw, 20px)',
                flex: 1,
                position: 'relative',
                top: 'clamp(25px, 3vw, 43px)',
                paddingLeft: 'clamp(30px, 4vw, 62px)',
                paddingRight: 'clamp(30px, 4vw, 62px)',
              }}
            >
              <div style={{ minWidth: 'clamp(40px, 5vw, 60px)' }}></div>
              <div
                style={{
                  width: '100%',
                  maxWidth: '1091px',
                  minHeight: '127px',
                  transform: 'rotate(0deg)',
                  opacity: 1,
                  gap: 'clamp(15px, 2vw, 20px)',
                  paddingTop: '3px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                }}
              >
                <div
                  style={{
                    // fontFamily: 'Familjen Grotesk',
                    fontWeight: 400,
                    fontStyle: 'normal',
                    fontSize: 'clamp(16px, 2.5vw, 20px)',
                    lineHeight: '140%',
                    letterSpacing: '0px',
                    //background: '#3C3C43D9',
                    color: '#6b7280',
                    padding: 'clamp(8px, 1.5vw, 10px)',
                    borderRadius: '4px',
                    flex: 1,
                  }}
                >
                  {item.answer}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default FAQ
