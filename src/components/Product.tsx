import Image from 'next/image'

interface ProductProps {
  imageSrc: string
  imageAlt: string
  name: string
  onLearnMore?: () => void
}

export default function Product({
  imageSrc,
  imageAlt,
  name,
  onLearnMore,
}: ProductProps) {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '420px',
        height: 'auto',
        minHeight: 'clamp(400px, 50vw, 539px)',
        transform: 'rotate(0deg)',
        opacity: 1,
        border: 'none',
        borderRadius: '8px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '0',
        flex: '1',
        minWidth: '280px',
        position: 'relative',
        padding: '0 10px',
      }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={420}
        height={420}
        style={{
          width: '100%',
          maxWidth: 'clamp(280px, 90vw, 420px)',
          height: 'auto',
          aspectRatio: '1/1',
          transform: 'rotate(0deg)',
          opacity: 1,
          borderRadius: 'clamp(16px, 3vw, 24px)',
          objectFit: 'cover',
        }}
      />
      <div
        style={{
          width: '100%',
          maxWidth: '243px',
          height: 'auto',
          minHeight: '40px',
          opacity: 1,
          position: 'absolute',
          top: 'clamp(350px, 45vw, 430px)',
          left: '0',
          fontFamily: 'Familjen Grotesk, sans-serif',
          fontWeight: 400,
          fontStyle: 'normal',
          fontSize: 'clamp(24px, 4vw, 32px)',
          lineHeight: '100%',
          letterSpacing: '0%',
          textAlign: 'left',
          color: 'black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        {name}
      </div>
      <button
        onClick={onLearnMore}
        style={{
          width: 'clamp(160px, 80%, 190px)',
          height: 'clamp(44px, 6vw, 49px)',
          opacity: 1,
          position: 'absolute',
          top: 'clamp(410px, 55vw, 490px)',
          left: '0',
          borderRadius: '100px',
          gap: '10px',
          padding: 'clamp(10px, 2vw, 12px) clamp(24px, 4vw, 36px)',
          background: 'linear-gradient(90deg, #00D1FF 0%, #1A83FF 100%)',
          border: 'none',
          color: 'white',
          fontFamily: 'Familjen Grotesk, sans-serif',
          fontWeight: 500,
          fontSize: 'clamp(14px, 2.5vw, 16px)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
        }}
      >
        LEARN MORE
      </button>
    </div>
  )
}
