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
      style={{
        top: '80px',
        width: '100%',
        transform: 'rotate(0deg)',
        opacity: 1,
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px',
        overflow: 'hidden',
        maxWidth: '1320px',
        minHeight: '726px',
        margin: '0px auto',
        padding: '20px',
      }}
    >
      {faqItems.map((item, index) => (
        <div
          key={item.id}
          style={{
            width: '100%',
            minHeight: expandedItem === index ? '231px' : '162px',
            borderBottom:
              index < faqItems.length - 1 ? '1px solid #e5e7eb' : 'none',
            padding: 'clamp(15px, 2vw, 30px)',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'white',
            transition: 'all 0.3s ease',
          }}
        >
          {/* Fixed Header Row - Question and Button */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '48px',
              marginBottom: expandedItem === index ? '15px' : '0',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(15px, 2vw, 20px)',
                flex: 1,
                position: 'relative',
                top: 'clamp(30px, 4vw, 56px)',
                paddingLeft: 'clamp(30px, 4vw, 62px)',
                paddingRight: 'clamp(30px, 4vw, 62px)',
              }}
            >
              <div
                style={{
                  // fontFamily: 'Inter',
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  lineHeight: '120%',
                  letterSpacing: '0.25px',
                  // background: '#3C3C4380',
                  color: '#9ca3af',
                  minWidth: 'clamp(40px, 5vw, 60px)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
