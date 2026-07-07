'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Container from './Container'
import { Mail, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const contactRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-header > *', {
        scrollTrigger: {
          trigger: '.contact-header',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })

      gsap.from('.contact-info', {
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
        },
        x: -30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })

      gsap.from('.contact-form', {
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        },
        x: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      })
    }, contactRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
          Accept: 'application/json',
        },
      })
      
      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Form submission error:', error)
    }
  }

  return (
    <section
      ref={contactRef}
      id="contacto"
      className="bg-[#3d2d22] py-32 text-white"
    >
      <Container>

        <div className="mx-auto max-w-5xl">

          <div className="contact-header mb-20 text-center">

            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#d6b48b]">
              Contacto
            </p>

            <h2 className="mb-8 text-5xl">
              Peça a sua encomenda
            </h2>

            <p className="mx-auto max-w-2xl text-lg leading-9 text-stone-300">
              Preencha o formulário abaixo e entraremos em contacto consigo para confirmar a disponibilidade, a quantidade pretendida e os detalhes da entrega.
            </p>

          </div>

          <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

            <div className="contact-info">

              <h3 className="mb-10 text-3xl">
                Contactos
              </h3>

              <div className="space-y-8">

                <div className="flex items-start gap-4">

                  <Phone
                    size={22}
                    className="mt-1 text-[#d6b48b]"
                  />

                  <div>

                    <p className="mb-1 text-sm uppercase tracking-widest text-stone-400">
                      Telefone
                    </p>

                    <a
                      href="tel:+913593662"
                      className="text-lg transition hover:text-[#d6b48b]"
                    >
                      +351 91 359 3662
                    </a>

                  </div>

                </div>

                <div className="flex items-start gap-4">

                  <Mail
                    size={22}
                    className="mt-1 text-[#d6b48b]"
                  />

                  <div>

                    <p className="mb-1 text-sm uppercase tracking-widest text-stone-400">
                      Email
                    </p>

                    <a
                      href="mailto:maria.lima.hub@gmail.com"
                      className="text-lg transition hover:text-[#d6b48b]"
                    >
                      maria.lima.hub@gmail.com
                    </a>

                  </div>

                </div>

              </div>

            </div>

            {submitted ? (
              <div className="contact-form rounded-3xl bg-white p-10 text-center text-[#3d2d22]">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-10 w-10 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-2xl font-medium">
                  Obrigado pelo seu contacto!
                </h3>
                <p className="text-lg leading-8 text-stone-700">
                  Recebemos o seu pedido e responderemos com a maior brevidade possível.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/xeebnaaw"
                method="POST"
                onSubmit={handleSubmit}
                className="contact-form space-y-6 rounded-3xl bg-white p-10 text-[#3d2d22]"
              >

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Nome
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-[#8b5a2b]"
                  />

                </div>

                <div>

                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium"
                  >
                    Empresa <span className="text-stone-500">(Opcional)</span>
                  </label>

                  <input
                    id="company"
                    name="company"
                    type="text"
                    className="w-full rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-[#8b5a2b]"
                  />

                </div>

                <div className="grid gap-6 md:grid-cols-2">

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium"
                    >
                      Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-[#8b5a2b]"
                    />

                  </div>

                  <div>

                    <label
                      htmlFor="quantity"
                      className="mb-2 block text-sm font-medium"
                    >
                      Quantidade
                    </label>

                    <select
                      id="quantity"
                      name="quantity"
                      className="w-full rounded-xl border border-stone-300 bg-white px-5 py-4 outline-none transition focus:border-[#8b5a2b]"
                      required
                    >
                      <option value="">
                        Selecione
                      </option>
                      <option>20 unidades</option>
                      <option>40 unidades</option>
                      <option>60 unidades</option>
                      <option>80 unidades</option>
                      <option>Mais de 100 unidades</option>
                    </select>

                  </div>

                </div>

                <div>

                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Como podemos ajudar?
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full rounded-xl border border-stone-300 px-5 py-4 outline-none transition focus:border-[#8b5a2b]"
                  />

                </div>

                <button
                  type="submit"
                  className="rounded-xl bg-[#8b5a2b] px-10 py-4 text-lg font-medium text-white transition hover:bg-[#6e4520]"
                >
                  Enviar Pedido
                </button>

              </form>
            )}

          </div>

        </div>

      </Container>
    </section>
  )
}