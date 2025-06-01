'use client'
import { useEffect, useState } from 'react'
import { AnimatedWrapper } from './AnimatedWrapper'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Member for 2 years",
    content: "Ironworks Gym has transformed my life. The 24/7 access fits perfectly with my nursing schedule, and the community is incredibly supportive.",
    image: "/test-1.jpg"
  },
  {
    name: "Michael Rodriguez",
    role: "Member for 1 year",
    content: "Best gym in Thomasville! The equipment is always clean and well-maintained. The trainers actually care about your progress.",
    image: "/test-2.jpeg"
  },
  {
    name: "Emily Chen",
    role: "Member for 6 months",
    content: "I was intimidated to join a gym, but the welcoming atmosphere at Ironworks made me feel at home. I've never been in better shape!",
    image: "/test-3.jpeg"
  }
]

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const testimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <h2 className="text-4xl font-bold font-heading text-center mb-4">
            WHAT OUR MEMBERS SAY
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </AnimatedWrapper>

        {/* Testimonial Card */}
        <AnimatedWrapper key={testimonial.name} delay={0.2}>
          <div className="max-w-2xl mx-auto bg-gray-950 p-8 rounded-xl shadow-lg transition-all duration-500 ease-in-out">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-700 mr-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-bold text-white">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-300 italic">"{testimonial.content}"</p>
            <div className="flex mt-4 text-yellow-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </AnimatedWrapper>

        {/* Dot Navigation */}
        <div className="flex justify-center mt-6 space-x-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-red-600 scale-125'
                  : 'bg-gray-500 opacity-50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
