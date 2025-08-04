import React from 'react'
import Image from 'next/image'

const ContactUs = () => {
  return (
    <div
      style={{
        top: '2335px',
        width: '100%',
        maxWidth: '1320px',
        minHeight: '736px',
        transform: 'rotate(0deg)',
        opacity: 1,
        borderRadius: 'clamp(12px, 2vw, 18.7px)',
        background:
          'linear-gradient(90deg, rgba(32, 31, 31, 0.8) 0%, #201F1F 100%)',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto 116px auto',
        padding: 'clamp(20px, 3vw, 40px)',
      }}
    >
      {/* Bottle Image */}
      <div
        style={{
          position: 'absolute',
          top: 'clamp(80px, 10vw, 142.12px)',
          left: 'clamp(-60px, -5vw, -37.24px)',
          transform: 'rotate(23.19deg)',
          opacity: 0.9,
          zIndex: 1,
        }}
      >
        <Image
          src="/bottle6.png"
          alt="Bottle"
          width={459.2931060467784}
          height={690.09200285837}
          style={{
            width: 'clamp(300px, 35vw, 459.2931060467784px)',
            height: 'clamp(450px, 50vw, 690.09200285837px)',
            opacity: 1,
            objectFit: 'contain',
          }}
        />
      </div>

      {/* Contact Form Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%',
          paddingLeft: 'clamp(300px, 30vw, 400px)',
          color: 'white',
        }}
      >
        {/* Contact Form Container */}
        <div
          style={{
            position: 'absolute',
            top: '18px',
            left: '671px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 3,
          }}
        >
          <h1
            style={{
              fontSize: 'clamp(32px, 4vw, 48px)',
              fontWeight: 'bold',
              color: 'white',
              margin: 0,
            }}
          >
            Get in touch with us
          </h1>

          <p
            style={{
              fontSize: 'clamp(14px, 2vw, 18px)',
              color: '#E5E5E5',
              lineHeight: '1.6',
              margin: 0,
            }}
          >
            Hi, I m Amanda. Need help? Use the form below or email me at{' '}
            <span style={{ color: '#00D1FF' }}>hello@xyz.com</span>
          </p>

          <form
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(16px, 2vw, 24px)',
            }}
          >
            <div>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontWeight: '500',
                  marginBottom: 'clamp(6px, 1vw, 8px)',
                  color: 'white',
                }}
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Rachel Joe"
                style={{
                  width: '100%',
                  maxWidth: 'clamp(250px, 25vw, 400px)',
                  padding: 'clamp(12px, 2vw, 16px)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  background: '#2A2A2A',
                  border: '1px solid #404040',
                  borderRadius: '8px',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
              />
            </div>

            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontWeight: '500',
                  marginBottom: 'clamp(6px, 1vw, 8px)',
                  color: 'white',
                }}
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Rachel@domain.com"
                style={{
                  width: '100%',
                  maxWidth: 'clamp(250px, 25vw, 400px)',
                  padding: 'clamp(12px, 2vw, 16px)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  background: '#2A2A2A',
                  border: '1px solid #404040',
                  borderRadius: '8px',
                  color: 'white',
                  outline: 'none',
                  transition: 'border-color 0.3s ease',
                }}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  fontWeight: '500',
                  marginBottom: 'clamp(6px, 1vw, 8px)',
                  color: 'white',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Type your query here....."
                rows={4}
                style={{
                  width: '100%',
                  maxWidth: 'clamp(250px, 25vw, 400px)',
                  padding: 'clamp(12px, 2vw, 16px)',
                  fontSize: 'clamp(14px, 1.5vw, 16px)',
                  background: '#2A2A2A',
                  border: '1px solid #404040',
                  borderRadius: '8px',
                  color: 'white',
                  outline: 'none',
                  resize: 'vertical',
                  transition: 'border-color 0.3s ease',
                  fontFamily: 'inherit',
                  minHeight: 'clamp(80px, 10vw, 120px)',
                }}
              />
            </div>

            <button
              type="submit"
              style={{
                background: 'linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: 'clamp(12px, 2vw, 16px) clamp(20px, 3vw, 32px)',
                fontSize: 'clamp(14px, 2vw, 18px)',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'transform 0.2s ease',
                marginTop: 'clamp(10px, 2vw, 20px)',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                width: 'fit-content',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}
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
