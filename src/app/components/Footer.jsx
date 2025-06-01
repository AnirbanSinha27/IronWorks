'use client'
import Link from 'next/link'
import { AnimatedWrapper } from './AnimatedWrapper'

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <AnimatedWrapper delay={0.1}>
            <div>
              <h3 className="text-xl font-bold font-heading mb-4">IRONWORKS GYM</h3>
              <p className="mb-4">Your premier 24/7 fitness destination in Thomasville, AL.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-red-500 transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-red-500 transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.75 2C5.67893 2 4 3.67893 4 5.75V18.25C4 20.3211 5.67893 22 7.75 22H16.25C18.3211 22 20 20.3211 20 18.25V5.75C20 3.67893 18.3211 2 16.25 2H7.75ZM2 5.75C2 2.57436 4.57436 0 7.75 0H16.25C19.4256 0 22 2.57436 22 5.75V18.25C22 21.4256 19.4256 24 16.25 24H7.75C4.57436 24 2 21.4256 2 18.25V5.75ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM5 12C5 8.68629 7.68629 6 11 6C14.3137 6 17 8.68629 17 12C17 15.3137 14.3137 18 11 18C7.68629 18 5 15.3137 5 12ZM17.5 6.5C17.5 7.32843 16.8284 8 16 8C15.1716 8 14.5 7.32843 14.5 6.5C14.5 5.67157 15.1716 5 16 5C16.8284 5 17.5 5.67157 17.5 6.5Z"/>
                  </svg>
                </a>
                <a href="#" className="hover:text-red-500 transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6.011c-.793.353-1.644.591-2.538.698a4.478 4.478 0 001.965-2.47 9.012 9.012 0 01-2.858 1.092 4.51 4.51 0 00-7.707 4.105A12.79 12.79 0 013.147 4.56a4.505 4.505 0 001.395 6.018 4.474 4.474 0 01-2.04-.563v.057a4.508 4.508 0 003.617 4.418 4.506 4.506 0 01-2.032.077 4.514 4.514 0 004.21 3.123 9.057 9.057 0 01-5.61 1.937c-.364 0-.723-.021-1.078-.063A12.797 12.797 0 007.548 21c8.29 0 12.823-6.868 12.823-12.823 0-.195-.005-.39-.014-.584A9.172 9.172 0 0022.46 6.01z" />
                  </svg>
                </a>
              </div>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.2}>
            <div>
              <h4 className="text-lg font-bold mb-4">QUICK LINKS</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Memberships', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link href={`/${item.toLowerCase()}`} className="hover:text-red-500 transition-colors">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.3}>
            <div>
              <h4 className="text-lg font-bold mb-4">HOURS</h4>
              <ul className="space-y-2">
                <li>Monday - Friday: 24/7</li>
                <li>Saturday: 24/7</li>
                <li>Sunday: 24/7</li>
              </ul>
            </div>
          </AnimatedWrapper>

          <AnimatedWrapper delay={0.4}>
            <div>
              <h4 className="text-lg font-bold mb-4">CONTACT</h4>
              <address className="not-italic">
                <p>123 Fitness St</p>
                <p>Thomasville, AL 36784</p>
                <p className="mt-2">Phone: (334) 636-4923</p>
                <p>Email: info@ironworksgym.com</p>
              </address>
            </div>
          </AnimatedWrapper>
        </div>

        <AnimatedWrapper delay={0.5}>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Ironworks Gym. All rights reserved.</p>
          </div>
        </AnimatedWrapper>
      </div>
    </footer>
  )
}
