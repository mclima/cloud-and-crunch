'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from './Container'
import Image from 'next/image'
import { Package, Mail, Truck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const steps = [
  {
    number: '1',
    icon: Package,
    title: 'Indique a quantidade pretendida.',
  },
  {
    number: '2',
    icon: Mail,
    title: 'Entre em contacto.',
  },
  {
    number: '3',
    icon: Truck,
    title: 'Receba a sua encomenda.',
  },
]

export default function Order() {
  const orderRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.order-image', {
        scrollTrigger: {
          trigger: '.order-image',
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.order-header > *', {
        scrollTrigger: {
          trigger: '.order-header',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })

      gsap.from('.order-step', {
        scrollTrigger: {
          trigger: '.order-step',
          start: 'top 85%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, orderRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={orderRef} id="encomendar">
      <Container className="!max-w-7xl">

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">

          <div className="order-image flex items-center justify-center">
            <Image
              src="/images/cloud-crunch-order-dessert.png"
              alt="Cloud & Crunch Dessert"
              width={1000}
              height={1000}
              priority
              className="rounded-lg w-full h-auto"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="order-header mb-12">

              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b5a2b]">
                Como Encomendar
              </p>

              <h2 className="text-5xl text-[#3d2d22]">
                É simples.
              </h2>

            </div>

            <div className="grid grid-cols-3 gap-8">

              {steps.map((step, index) => {
                const Icon = step.icon
                return (
                  <div key={step.number} className="order-step flex flex-col items-center text-center">

                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#3d2d22] text-sm font-semibold text-[#3d2d22]">
                      {step.number}
                    </div>

                    <Icon className="mb-4 h-12 w-12 text-[#3d2d22]" strokeWidth={1.5} />

                    {index < steps.length - 1 && (
                      <div className="absolute left-1/2 top-6 hidden h-px w-full bg-stone-300 lg:block" style={{ transform: 'translateX(50%)' }} />
                    )}

                    <p className="text-sm leading-relaxed text-stone-700">
                      {step.title}
                    </p>

                  </div>
                )
              })}

            </div>
          </div>

        </div>

      </Container>
    </section>
  )
}