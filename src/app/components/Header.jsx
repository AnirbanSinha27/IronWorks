'use client'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedWrapper } from './AnimatedWrapper'
import { useState, useEffect } from 'react'

export const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-950 shadow-xl'  // Darker when scrolled
        : 'bg-gray-950'               // Solid dark by default
    }`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <AnimatedWrapper delay={0.1}>
          <Link href="/" className="flex items-center group">
            <Image 
              src="/logo.png" 
              alt="Ironworks Gym Logo" 
              width={50} 
              height={50} 
              className="mr-3 rounded-full border-2 border-primary group-hover:border-accent transition-all"
            />
            <span className="text-2xl font-bold font-heading text-white group-hover:text-primary transition-colors">
              IRONWORKS GYM
            </span>
          </Link>
        </AnimatedWrapper>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {['Home', 'About', 'Memberships', 'Contact'].map((item, index) => (
  <AnimatedWrapper key={item} delay={0.2 + index * 0.1}>
    <Link 
      href={`/#${item.toLowerCase()}`} // <-- Add # and scroll target
      className="text-gray-300 hover:text-white transition-colors font-medium relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
    >
      {item}
    </Link>
  </AnimatedWrapper>
))}

          <AnimatedWrapper delay={0.5}>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 ml-4 shadow-lg hover:shadow-red-500/30">
              JOIN NOW
            </button>
          </AnimatedWrapper>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-gray-700">
          <nav className="flex flex-col space-y-2 p-4">
            {['Home', 'About', 'Memberships', 'Contact'].map((item) => (
  <Link 
    key={item}
    href={`/#${item.toLowerCase()}`} // <-- Add # for scroll target
    className="text-gray-300 hover:text-white transition-colors font-medium py-3 px-4 rounded hover:bg-gray-700"
    onClick={() => setMobileMenuOpen(false)}
  >
    {item}
  </Link>
))}

            <button className="bg-red-600 hover:bg-red-800 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 w-full mt-2 hover:scale-105">
              JOIN NOW
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}