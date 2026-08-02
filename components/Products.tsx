'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Container from './Container'

gsap.registerPlugin(ScrollTrigger)

const products = [
  {
    name: 'Delicia',
    description: 'Uma sobremesa semi-fria artesanal que combina uma textura incrivelmente cremosa com um toque crocante. Perfeita para quem procura uma experiência refrescante e única.',
    image: '/images/delicia-gelada.webp',
    category: 'Sobremesas',
  },
  {
    name: 'Cheesecake de Morango',
    description: 'Um cheesecake cremoso com uma camada generosa de morangos frescos. Uma sobremesa clássica feita com ingredientes de qualidade premium.',
    image: '/images/strawberry-cheescake.webp',
    category: 'Sobremesas',
  },
  {
    name: 'Cheesecake de Morango Tacinha',
    description: 'A mesma delícia cremosa do nosso cheesecake de morango, agora em formato individual. Perfeito para uma porção pessoal de indulgência.',
    image: '/images/cheesecake-morango-tacinha.webp',
    category: 'Sobremesas',
  },
  {
    name: 'Queques de Maçã e Passas',
    description: 'Queques artesanais macios e aromáticos, repletos de maçã fresca e passas suculentas. Ideais para acompanhar um café ou chá.',
    image: '/images/apple-raisin-queques.webp',
    category: 'Sobremesas',
  },
  {
    name: 'Bolo Mocca',
    description: 'Um bolo rico e aromático com sabor intenso a café e chocolate. Camadas macias e húmidas que derretem na boca, perfeito para os amantes de café.',
    image: '/images/mocca-cake.webp',
    category: 'Sobremesas',
  },
  {
    name: 'Mousse de Manga',
    description: 'Uma mousse leve e refrescante feita com mangas maduras e suculentas. Textura aveludada que proporciona uma experiência tropical irresistível.',
    image: '/images/mousse-manga-taca-cheia.webp',
    category: 'Sobremesas',
  },
  {
    name: 'Quiche de Espinafres',
    description: 'Uma quiche artesanal com espinafres frescos e queijo cremoso. Perfeita para um lanche saboroso ou refeição ligeira.',
    image: '/images/quiche-espinafres.webp',
    category: 'Bonus',
  },
]

export default function Products() {
  const productsRef = useRef<HTMLElement>(null)

  const groupedProducts = products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {} as Record<string, typeof products>)

  const categoryInfo: Record<string, { title: string; subtitle: string }> = {
    Sobremesas: {
      title: 'Sobremesas artesanais feitas com dedicação.',
      subtitle: 'Cada sobremesa é cuidadosamente preparada com ingredientes selecionados para garantir qualidade e sabor excecional.',
    },
    Bonus: {
      title: 'Bonus',
      subtitle: 'Delícias especiais que complementam a nossa oferta.',
    },
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.products-header > *', {
        scrollTrigger: {
          trigger: '.products-header',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      })

      const cards = gsap.utils.toArray('.product-card')
      
      gsap.set(cards, { y: 50, opacity: 0 })
      
      gsap.to(cards, {
        scrollTrigger: {
          trigger: '.products-grid',
          start: 'top 80%',
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
      })
    }, productsRef)

    ScrollTrigger.refresh()

    return () => ctx.revert()
  }, [])

  return (
    <section ref={productsRef} id="produtos" className="bg-white/40">
      <Container>

        <div className="products-header mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b5a2b]">
            Os Nossos Produtos
          </p>

          <h2 className="mb-8 text-5xl text-[#3d2d22]">
            Produtos artesanais
            <br />
            feitos com dedicação.
          </h2>

          <p className="text-lg leading-9 text-stone-700">
            Cada produto é cuidadosamente preparado com ingredientes
            selecionados para garantir qualidade e sabor excecional.
          </p>

        </div>

        {Object.entries(groupedProducts).map(([category, categoryProducts]) => (
          <div key={category} className="mb-20 last:mb-0">
            <h3 className="mb-12 text-center text-3xl text-[#3d2d22]">
              {categoryInfo[category]?.title || category}
            </h3>

            <div className="products-grid grid items-start gap-12 lg:grid-cols-3">
              {categoryProducts.map((product) => (
                <article
                  key={product.name}
                  className="product-card group overflow-hidden rounded-3xl bg-[#faf6f2] transition-transform duration-300 hover:scale-[1.02]"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#faf6f2]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={600}
                      height={600}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="mb-4 text-3xl text-[#3d2d22]">
                      {product.name}
                    </h3>

                    <p className="leading-8 text-stone-700">
                      {product.description}
                    </p>
                  </div>

                </article>
              ))}

            </div>
          </div>
        ))}

      </Container>
    </section>
  )
}
