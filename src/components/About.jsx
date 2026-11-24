import { ArrowUpRight, CircleCheck } from 'lucide-react'
import { clinic, marqueeItems } from '../data'
import { Photo, Reveal, Sparkle, ToothIcon } from './ui'

export function About() {
  const points = [
    'Complete dental care under one roof',
    'Sterilised instruments and modern equipment',
    'Clear treatment plans with honest pricing',
  ]
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        <Reveal className="relative mx-auto w-full max-w-lg">
          <Sparkle className="absolute -left-2 top-4 h-8 w-8 text-primary" />
          <Sparkle className="absolute left-12 top-14 h-14 w-14 text-primary" />
          <Sparkle className="absolute left-2 top-28 h-4 w-4 text-primary" />
          <div className="tooth-mask ml-auto aspect-[1/1.05] w-[78%]">
            <Photo src="about-1.jpg" alt="Patient smiling during a check-up" label="Add about-1.jpg" className="h-full w-full" />
          </div>
          <div className="absolute bottom-0 left-0 w-[44%] rounded-[40%] bg-white p-2">
            <div className="tooth-mask aspect-[1/1.05] w-full">
              <Photo src="about-2.jpg" alt="Dentist treating a patient" label="about-2.jpg" className="h-full w-full" />
            </div>
          </div>
          <a href="#contact" aria-label="Contact us" className="absolute bottom-2 left-[46%] flex h-28 w-28 cursor-pointer items-center justify-center rounded-full bg-navy ring-8 ring-white transition-transform duration-200 hover:scale-105">
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow" aria-hidden="true">
              <defs><path id="circle-text" d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" /></defs>
              <text className="fill-white text-[10px] font-bold uppercase"><textPath href="#circle-text" textLength="224" lengthAdjust="spacing">Contact • Contact • Contact •</textPath></text>
            </svg>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white"><ArrowUpRight className="h-5 w-5" /></span>
          </a>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="eyebrow">About Us</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-primary sm:text-4xl lg:text-[44px]">
            Expert, Gentle Care <span className="block text-navy">for Every Smile</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {clinic.name} is a family dental clinic on Park Road, Hassan, led by {clinic.doctor}. We focus on comfortable treatment, clear explanations and results that last — so every visit leaves you smiling.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-base text-ink">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 fill-primary text-white" aria-hidden="true" /> {p}
              </li>
            ))}
          </ul>
          <a href="#dentist" className="btn-primary mt-8">Meet the Dentist</a>
        </Reveal>
      </div>
    </section>
  )
}

export function Marquee({ className = '' }) {
  const items = [...marqueeItems, ...marqueeItems]
  return (
    <div className={`overflow-hidden bg-primary py-5 text-white ${className}`} aria-label="Our treatments">
      <ul className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {items.map((t, i) => (
          <li key={i} className="flex items-center gap-10 whitespace-nowrap text-xl font-semibold sm:text-2xl" aria-hidden={i >= marqueeItems.length}>
            <ToothIcon className="h-7 w-7" /> {t}
          </li>
        ))}
      </ul>
    </div>
  )
}
