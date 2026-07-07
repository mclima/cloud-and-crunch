'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import Container from './Container'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      
      tl.from('.hero-title', {
        y: 50,
        opacity: 0,
        duration: 1,
      })
      .from('.hero-subtitle', {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, '-=0.5')
      .from('.hero-divider', {
        scaleX: 0,
        opacity: 0,
        duration: 0.6,
        transformOrigin: 'left',
      }, '-=0.4')
      .from('.hero-description', {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, '-=0.4')
      .from('.hero-buttons', {
        y: 20,
        opacity: 0,
        duration: 0.8,
      }, '-=0.4')
      .from('.hero-image', {
        scale: 0.8,
        opacity: 0,
        duration: 1,
      }, '-=0.8')
    }, heroRef)

    return () => ctx.revert()
  }, [])
  return (
    <section ref={heroRef} className="overflow-hidden pb-28 pt-24">
      <Container>

       <div className="grid lg:grid-cols-[58%_42%] items-center gap-8">

          <div>

            <h1 className="hero-title mb-6 font-serif text-5xl leading-tight text-[#3d2d22] sm:text-6xl md:text-7xl lg:text-8xl lg:leading-none">
              Cloud & Crunch
            </h1>

            <p className="hero-subtitle mb-10 font-serif text-3xl italic text-[#8b5a2b]">
              Uma sobremesa cremosa e irresistível.
            </p>

            <div className="hero-divider mb-10 h-px w-32 bg-[#c8b29a]" />

            <p className="hero-description max-w-xl text-lg leading-9 text-stone-700">
              Criámos uma sobremesa gelada artesanal que combina uma
              textura incrivelmente cremosa com um toque
              crocante, para transformar qualquer refeição
              num momento especial.
            </p>

            <div className="hero-buttons mt-14 flex flex-wrap gap-5">

              <a
  href="#contacto"
  className="box-border flex h-14 w-52 items-center justify-center rounded-xl border border-[#8b5a2b] bg-[#8b5a2b] font-medium text-white transition hover:bg-[#6e4520]"
>
  Fazer Encomenda
</a>

              <a
                href="tel:+351913593662"
                className="box-border flex h-14 w-52 items-center justify-center rounded-xl border border-[#8b5a2b] font-medium text-[#8b5a2b] transition hover:bg-[#8b5a2b] hover:text-white"
              >
                Falar Connosco
              </a>

            </div>

          </div>

          <div className="hero-image relative">

            <div className="absolute inset-0 rounded-full bg-[#efe2d5] blur-3xl" />

            <Image
              src="/images/cloud-crunch-hero-5.webp"
              alt="Cloud & Crunch"
              width={850}
              height={850}
              priority
              className="relative mx-auto"
              style={{ height: 'auto' }}
            />

          </div>

        </div>

      </Container>
    </section>
  )
}