'use client'
import { AnimatedWrapper } from './AnimatedWrapper'

const memberships = [
  {
    name: "Basic",
    price: "29",
    period: "month",
    features: [
      "24/7 Gym Access",
      "Standard Equipment",
      "1 Free Class/Month",
      "No Commitment"
    ],
    popular: false
  },
  {
    name: "Premium",
    price: "49",
    period: "month",
    features: [
      "24/7 Gym Access",
      "All Equipment",
      "3 Free Classes/Month",
      "Personalized Plan",
      "No Commitment"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "79",
    period: "month",
    features: [
      "24/7 Gym Access",
      "All Equipment",
      "Unlimited Classes",
      "Personal Training (2x/mo)",
      "Nutrition Plan",
      "No Commitment"
    ],
    popular: false
  }
]

export const MembershipCards = () => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <h2 className="text-4xl font-bold font-heading text-center mb-4">
            MEMBERSHIP PLANS
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {memberships.map((plan, index) => (
            <AnimatedWrapper key={plan.name} delay={0.2 + index * 0.1}>
              <div className={`relative rounded-lg overflow-hidden shadow-xl h-full transform transition-transform duration-300 hover:scale-105 ${plan.popular ? 'md:-translate-y-2' : ''}`}>
  {plan.popular && (
    <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 text-sm font-bold z-10">
      MOST POPULAR
    </div>
  )}
  <div className="flex flex-col h-full p-8 bg-gray-900 rounded-lg">
    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
    <div className="mb-6">
      <span className="text-4xl font-bold">${plan.price}</span>
      <span className="text-gray-400">/{plan.period}</span>
    </div>
    <ul className="mb-8 space-y-3 flex-grow">
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-center text-gray-300">
          <span className="flex items-center justify-center w-5 h-5 bg-green-600 text-white rounded mr-2 text-sm font-bold">✓</span>
          {feature}
        </li>
      ))}
    </ul>
    <button
      className={`w-full py-3 rounded-full font-bold transition-all
        ${plan.popular
          ? 'bg-red-600 hover:bg-red-700'
          : 'bg-red-600 hover:bg-red-700'
        }`}
    >
      JOIN NOW
    </button>
  </div>
</div>

            </AnimatedWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}
