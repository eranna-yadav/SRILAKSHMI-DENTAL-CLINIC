import { Phone } from 'lucide-react'
import Header from './components/Header'
import Hero from './components/Hero'
import { About, Marquee } from './components/About'
import { Journeys, Services, Steps } from './components/Services'
import Booking from './components/Booking'
import { BeforeAfter, CallToAction, Dentist, Faq, Testimonials, Tips } from './components/Sections'
import Footer from './components/Footer'
import { ToothClipDef } from './components/ui'
import { clinic, telLink } from './data'

export default function App() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2">Skip to content</a>
      <ToothClipDef />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Journeys />
        <Steps />
        <Marquee />
        <Booking />
        <BeforeAfter />
        <Testimonials />
        <Dentist />
        <Faq />
        <Tips />
        <CallToAction />
      </main>
      <Footer />
      <a href={telLink} aria-label={`Call ${clinic.name}`} className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-card transition-colors hover:bg-primary-dark md:hidden">
        <Phone className="h-6 w-6" />
      </a>
    </>
  )
}
