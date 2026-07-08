'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Container from './Container'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const aboutRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: '.about-image',
          start: 'top 80%',
        },
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      })

      gsap.from('.about-content > *', {
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })
    }, aboutRef)

    return () => ctx.revert()
  }, [])
  return (
    <section
      ref={aboutRef}
      id="sobre"
      className="border-t border-stone-200/50 bg-white/30"
    >
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div className="about-image hidden justify-center lg:flex">

            <Image
              src="/images/cloud-crunch-icon.webp"
              alt="Cloud & Crunch"
              width={240}
              height={240}
              style={{ width: 'auto', height: 'auto' }}
            />

          </div>

          <div className="about-content">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b5a2b]">
              Sobre
            </p>

            <h2 className="max-w-lg text-5xl leading-tight text-[#3d2d22]">
              Uma sobremesa que fica na memória.
            </h2>

            <div className="my-8 h-px w-20 bg-[#c8b29a]" />

            <p className="mb-8 text-lg leading-9 text-stone-700">
              Na Cloud & Crunch acreditamos que as melhores
              sobremesas não precisam de complicação.
            </p>

            <p className="mb-8 text-lg leading-9 text-stone-700">
              Criámos uma sobremesa artesanal que combina uma
              textura incrivelmente cremosa com um toque
              crocante, para transformar qualquer refeição
              num momento especial.
            </p>

            <p className="text-lg leading-9 text-stone-700">
              Ideal para restaurantes, cafés, eventos e para
              todos os que apreciam uma sobremesa feita com
              qualidade e dedicação.
            </p>

          </div>

        </div>

      </Container>
    </section>
  )
}