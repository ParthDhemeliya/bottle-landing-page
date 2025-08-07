'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function ShopPage() {
  const headerRef = useRef<HTMLDivElement>(null)
  const productsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Defer GSAP animations to improve initial load performance
    const timer = setTimeout(() => {
      const tl = gsap.timeline({ delay: 0 })

      // Animate header elements
      tl.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      )

      // Animate products with stagger
      const products = productsRef.current?.querySelectorAll('.product-item')
      if (products) {
        tl.fromTo(
          products,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.4'
        )
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const products = [
    {
      id: 1,
      name: 'Rainbow 600',
      imageSrc: '/optimized-dummyBottle1.webp',
      imageAlt: 'Rainbow 600 Water Bottle',
      category: 'Vacuum Bottles',
      price: '$29.99',
      description: 'Premium insulated water bottle with rainbow design',
    },
    {
      id: 2,
      name: 'Rio 650',
      imageSrc: '/optimized-dummyBottle2.webp',
      imageAlt: 'Rio 650 Water Bottle',
      category: 'Vacuum Bottles',
      price: '$34.99',
      description: 'Large capacity insulated bottle for active lifestyles',
    },
    {
      id: 3,
      name: 'Big Bull 1300',
      imageSrc: '/optimized-dummyBottle3 (2).webp',
      imageAlt: 'Big Bull 1300 Water Bottle',
      category: 'Vacuum Bottles',
      price: '$39.99',
      description: 'Extra large capacity bottle for extended hydration',
    },
    {
      id: 4,
      name: 'Rome 600',
      imageSrc: '/optimized-dummyBottle4.webp',
      imageAlt: 'Rome 600 Water Bottle',
      category: 'Fridge Bottles',
      price: '$24.99',
      description: 'Classic design fridge bottle for daily use',
    },
    {
      id: 5,
      name: 'Sweetie 200',
      imageSrc: '/optimized-dummyBottle5.webp',
      imageAlt: 'Sweetie 200 Water Bottle',
      category: 'Borosilicate Bottles',
      price: '$19.99',
      description: 'Compact and stylish borosilicate bottle',
    },
    {
      id: 6,
      name: 'Classic 500',
      imageSrc: '/optimized-dummyBottle1.webp',
      imageAlt: 'Classic 500 Water Bottle',
      category: 'Vacuum Bottles',
      price: '$27.99',
      description: 'Timeless design with modern insulation technology',
    },
  ]

  const categories = [
    { name: 'All Products', count: products.length },
    { name: 'Vacuum Bottles', count: 4 },
    { name: 'Fridge Bottles', count: 1 },
    { name: 'Borosilicate Bottles', count: 1 },
    { name: 'Kettles', count: 0 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="absolute inset-0 bg-black opacity-5"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
            Our Products
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our premium collection of hydration essentials designed for
            your lifestyle
          </p>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 md:py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {categories.map((category, index) => (
              <button
                key={index}
                className="px-6 py-3 rounded-full bg-gray-100 hover:bg-blue-500 hover:text-white transition-all duration-300 text-sm md:text-base font-medium"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            ref={headerRef}
            className="text-center mb-12 md:mb-16"
            style={{ opacity: 0 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Hydration Essentials
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our range of premium water bottles designed for health,
              happiness, and sustainability
            </p>
          </div>

          {/* Products Grid */}
          <div
            ref={productsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12"
          >
            {products.map((product, index) => (
              <div
                key={product.id}
                className="product-item"
                style={{ opacity: 0 }}
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  {/* Product Image */}
                  <div className="relative h-64 md:h-72 bg-gray-100">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      priority={index < 3}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded-full">
                        {product.price}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-300">
                        Add to Cart
                      </button>
                      <button className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12 md:mt-16">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-full font-medium text-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl">
              Load More Products
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the highest quality hydration
              solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Made with the finest materials for durability and performance
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Eco-Friendly
              </h3>
              <p className="text-gray-600">
                Sustainable materials and manufacturing processes
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Round-the-clock customer service and support
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
