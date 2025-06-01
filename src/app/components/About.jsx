'use client'
import Head from 'next/head'
import { Header } from './Header'
import { Footer } from './Footer'
import { AnimatedWrapper } from './AnimatedWrapper'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Head>
        <title>About Ironworks Gym | Thomasville, AL</title>
        <meta name="description" content="Learn about Ironworks Gym's mission, facilities, and commitment to helping our members achieve their fitness goals." />
      </Head>

      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative h-96 flex items-center justify-center mt-20">
          <Image 
            src="/gym-equipment.jpg" 
            alt="Gym Equipment"
            layout="fill"
            objectFit="cover"
            className="z-0 blur-sm"
          />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <AnimatedWrapper>
              <div className="bg-gray-300 backdrop-blur-md p-6 rounded-md inline-block">
                <h1 className="text-5xl font-bold font-heading mb-2 text-dark">OUR STORY</h1>
                <p className="text-lg text-dark">Committed to helping you build strength, confidence, and community.</p>
              </div>
            </AnimatedWrapper>
          </div>
        </section>

        {/* About Content */}
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <AnimatedWrapper>
                <h2 className="text-3xl font-bold font-heading mb-6 text-secondary text-center">WELCOME TO IRONWORKS GYM</h2>
              </AnimatedWrapper>

              <AnimatedWrapper delay={0.2}>
                <p className="mb-6 text-gray-700 text-lg leading-relaxed text-center">
                  Founded in 2015, Ironworks Gym was born out of a passion for fitness and a desire to create a welcoming space for people of all fitness levels in Thomasville, Alabama. Our founder, a lifelong fitness enthusiast, saw the need for a gym that combined premium equipment with flexible access.
                </p>
              </AnimatedWrapper>

              <AnimatedWrapper delay={0.3}>
                <p className="mb-6 text-gray-700 text-lg text-center leading-relaxed">
                  What started as a small local gym has grown into Thomasville's premier fitness destination, serving hundreds of members who appreciate our 24/7 access, top-notch equipment, and supportive community.
                </p>
              </AnimatedWrapper>

              <AnimatedWrapper delay={0.4}>
  <div className="grid md:grid-cols-2 gap-8 my-12">
    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-primary">OUR MISSION</h3>
      <p className="text-gray-700">To empower individuals to achieve their fitness goals through accessible facilities, expert guidance, and a supportive community.</p>
    </div>
    <div className="bg-white p-6 rounded-xl shadow-md border-2 border-gray-200">
      <h3 className="text-xl font-bold mb-4 text-secondary">OUR VISION</h3>
      <p className="text-gray-700">To be the leading fitness center in Thomasville by continuously improving our services and fostering a culture of health and wellness.</p>
    </div>
  </div>
</AnimatedWrapper>


              <AnimatedWrapper delay={0.5}>
  <div className="bg-white p-8 border-2 rounded-xl shadow-md border-gray-200">
    <h3 className="text-2xl font-bold font-heading mb-4 text-secondary">OUR FACILITIES</h3>
    <p className="mb-6 text-gray-700 text-lg">Our 10,000 square foot facility features:</p>
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {[
        "Cardio zone with treadmills, ellipticals, and bikes",
        "Free weights area with racks and benches",
        "Functional training zone with TRX, kettlebells, and battle ropes",
        "Dedicated stretching and mobility area",
        "Locker rooms with showers",
        "24/7 secure access with key fob entry"
      ].map((item, index) => (
        <li key={index} className="flex items-start text-gray-800">
          <span className="flex items-center justify-center w-6 h-6 mr-2 mt-1 rounded bg-green-600 text-white text-sm font-bold">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  </div>
</AnimatedWrapper>

            </div>
          </div>
        </section>
      </main>
    </>
  )
}
