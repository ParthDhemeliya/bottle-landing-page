import AboutUs from '@/components/AboutUs'

export default function AboutPage() {
  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        backgroundImage: 'url("/optimized-aboutusbackgound.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#2d3748',
      }}
    >
      <AboutUs />
    </div>
  )
}
