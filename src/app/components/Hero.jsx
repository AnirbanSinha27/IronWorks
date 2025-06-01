'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedWrapper } from './AnimatedWrapper'
import { useState, useEffect } from 'react'

export const Hero = () => {
  const images = [
    '/gym-1.png',
    '/gym-2.png',
    '/gym-3.png',
    '/gym-4.png'
  ]
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Auto-rotate images every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }, 5000)
  return () => clearInterval(interval)
}, [images.length])

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <motion.div
            key={src}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: index === currentImageIndex ? 0.5 : 0,
              zIndex: index === currentImageIndex ? 1 : 0
            }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <Image 
  src={src}
  alt={`Ironworks Gym Interior ${index + 1}`}
  fill
  className="object-cover brightness-50"
  priority
/>


          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>

      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-white flex justify-center items-center h-full">
  <div className="flex flex-col items-center gap-6 text-center">

    <AnimatedWrapper delay={0.3}>
      <p className="text-3xl md:text-4xl font-bold font-heading leading-tight text-white">
        OPEN 24 HOURS A DAY, 7 DAYS A WEEK.
      </p>
    </AnimatedWrapper>

    <AnimatedWrapper delay={0.5}>
      <button
        className="bg-red-700 hover:bg-red-800 hover:scale-105 hover:shadow-red-500/30 text-white px-8 py-3 rounded-full font-bold transition-all duration-300 w-fit"
      >
        GET STARTED
      </button>
    </AnimatedWrapper>

    <AnimatedWrapper delay={0.7}>
      <button
        className="bg-white  text-black px-8 py-3 rounded-full font-bold transition-all duration-300 w-fit
                   hover:bg-gray-300"
      >
        LEARN MORE
      </button>
    </AnimatedWrapper>

  </div>
</div>

      {/* Scroll Down Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 cursor-pointer"
        onClick={handleScrollDown}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        whileHover={{ scale: 1.2 }}
      >
        <svg 
          className="w-10 h-10 text-white" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </motion.div>
    </section>
  )
}