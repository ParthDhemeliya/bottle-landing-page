import BottleCap from '@/components/svg/bottle/bottleCap'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-white">
      {/* Hero Section */}
      <section className="relative w-full max-w-6xl flex flex-col items-center text-center pt-24 px-4">
        {/* Top bottle cap image */}
        <BottleCap />

        {/* Gradient circle background */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full opacity-30 blur-2xl z-0"></div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-black relative z-10">
          The Ultimate Companion <br />
          <span className="text-black">for Hydration</span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 relative z-10">
          we believe in the power of hydration.
          <br />
          Our mission is simple yet vital
        </p>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-full relative z-10 hover:opacity-90 transition">
          Inquiry Now
        </button>

        {/* Center Bottle Image */}
        <img
          src="/images/center-bottle.png" // replace with actual path
          alt="Center Bottle"
          className="w-40 md:w-52 mt-10 relative z-10"
        />

        {/* Side Bottles in Gradient Circles */}
        <div className="absolute left-0 bottom-16 md:bottom-24 z-10">
          <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
            <img
              src="/images/left-bottle.png" // replace with actual path
              alt="Left Bottle"
              className="h-32"
            />
          </div>
        </div>
        <div className="absolute right-0 bottom-16 md:bottom-24 z-10">
          <div className="w-40 h-40 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
            <img
              src="/images/right-bottle.png" // replace with actual path
              alt="Right Bottle"
              className="h-32"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
