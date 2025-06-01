import Head from 'next/head'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { MembershipCards } from './components/MembershipCards'
import { Testimonials } from './components/Testimonials'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'
import About from './components/About'
import Membership from './components/Membership'
import Contact from './components/Contact'
import { Gallery } from './components/Gallery'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ironworks Gym | Premium 24/7 Fitness in Thomasville, AL</title>
        <meta name="description" content="Ironworks Gym offers 24/7 access to premium fitness equipment, personal training, and group classes in Thomasville, AL." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Header />
      <Hero />
      <About/>
      <Features />
      <Membership/>
      <Gallery/>
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}