'use client'
import { AnimatedWrapper } from './AnimatedWrapper'

const features = [
  {
    title: "24/7 Access",
    description: "Work out on your schedule with our always-open facility.",
    icon: "⏰",
  },
  {
    title: "Premium Equipment",
    description: "State-of-the-art machines and free weights for all levels.",
    icon: "🏋️‍♂️",
  },
  {
    title: "Expert Trainers",
    description: "Certified professionals to guide your fitness journey.",
    icon: "👨‍🏫",
  },
  {
    title: "Community",
    description: "Join a supportive network of fitness enthusiasts.",
    icon: "👥",
  },
]

export const Features = () => {
  return (
    <section className="py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-4">
        <AnimatedWrapper>
          <h2 className="text-4xl font-bold font-heading text-center mb-4 text-white">
            WHY CHOOSE IRONWORKS
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-12"></div>
        </AnimatedWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <AnimatedWrapper key={feature.title} delay={0.2 + index * 0.1}>
  <div className="bg-gray-900 p-8 rounded-lg shadow-md text-white h-full
                  transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl">
    <div className="text-5xl mb-4">{feature.icon}</div>
    <h3 className="text-xl font-bold mb-2 text-primary">{feature.title}</h3>
    <p className="text-gray-300">{feature.description}</p>
  </div>
</AnimatedWrapper>

          ))}
        </div>
      </div>
    </section>
  )
}
