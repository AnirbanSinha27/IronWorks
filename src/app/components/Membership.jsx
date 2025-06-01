'use client'
import Head from 'next/head'
import { useState } from 'react'
import { Header } from './Header'
import { MembershipCards } from './MembershipCards'
import { Testimonials } from './Testimonials'
import { ContactForm } from './ContactForm'
import { Footer } from './Footer'
import { AnimatedWrapper } from './AnimatedWrapper'

export default function Membership() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Do you offer day passes?",
      answer: "Yes! We offer day passes for $15. You can purchase them at the front desk during staffed hours."
    },
    {
      question: "Are there any long-term contracts?",
      answer: "No, all our memberships are month-to-month with no long-term commitment. You can cancel anytime with 30 days notice."
    },
    {
      question: "What's included in the membership?",
      answer: "All memberships include 24/7 access to our facility and equipment. Higher tiers include additional benefits like classes and personal training sessions."
    },
    {
      question: "Do you offer student or military discounts?",
      answer: "Yes, we offer 10% off for students and military personnel with valid ID. Please bring your ID when you sign up."
    },
    {
      question: "How do I freeze my membership?",
      answer: "You can freeze your membership for up to 3 months per year for medical reasons or travel. Just notify us at least 7 days in advance."
    }
  ]

  return (
    <>
      <Head>
        <title>Membership Plans | Ironworks Gym</title>
        <meta name="description" content="Choose from our flexible membership options to find the perfect fit for your fitness journey at Ironworks Gym." />
      </Head>

      <Header />

      <main>
        {/* Membership Cards */}
        <MembershipCards />

        {/* FAQ Section */}
        <section className="py-20 bg-gray-950 text-white">
          <div className="container mx-auto px-4">
            <AnimatedWrapper>
              <h2 className="text-4xl font-bold font-heading text-center mb-4 text-white">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
            </AnimatedWrapper>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((item, index) => (
                <AnimatedWrapper key={item.question} delay={0.1 + index * 0.1}>
                  <div className="bg-gray-900 border border-gray-800 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                    >
                      <h3 className="text-lg font-semibold text-primary">{item.question}</h3>
                      <svg
                        className={`w-5 h-5 transform transition-transform duration-300 ${
                          openIndex === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openIndex === index && (
                      <div className="px-6 pb-4 text-gray-300 transition-all duration-300">
                        {item.answer}
                      </div>
                    )}
                  </div>
                </AnimatedWrapper>
              ))}
            </div>
          </div>
        </section>
      </main>

    </>
  )
}
