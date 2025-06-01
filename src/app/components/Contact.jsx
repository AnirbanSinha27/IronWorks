'use client'
import Head from 'next/head'
import { Header } from './Header'
import { ContactForm } from './ContactForm'
import { AnimatedWrapper } from './AnimatedWrapper'
import Image from 'next/image'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | Ironworks Gym</title>
        <meta name="description" content="Get in touch with Ironworks Gym in Thomasville, AL. We're here to answer your questions about memberships, classes, and more." />
      </Head>
      
      <Header />
      
      <main className="bg-gray-950">
        
        
        {/* Map Section - Reduced spacing */}
        <section id="contact" className="py-8 bg-gray-950">
          <div className="container mx-auto px-4">
            <AnimatedWrapper>
              <h2 className="text-3xl font-bold font-heading text-center mb-6 text-white">
                OUR LOCATION
              </h2>
            </AnimatedWrapper>
            
            <AnimatedWrapper delay={0.2}>
              <div className="bg-gray-950 p-4 rounded-lg shadow-lg">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.9876543210987!2d-87.7359877!3d31.9134567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDU0JzQ4LjQiTiA4N8KwNDQnMDkuNSJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2 text-white">ADDRESS</h3>
                    <p className="text-gray-300">123 Fitness St<br />Thomasville, AL 36784</p>
                  </div>
                  
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2 text-white">PHONE</h3>
                    <p className="text-gray-300">+1 (334) 636-4923</p>
                  </div>
                  
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h3 className="font-bold text-lg mb-2 text-white">EMAIL</h3>
                    <p className="text-gray-300">info@ironworksgym.com</p>
                  </div>
                </div>
              </div>
            </AnimatedWrapper>
          </div>
        </section>
        
        <ContactForm />
      </main>
    </>
  )
}