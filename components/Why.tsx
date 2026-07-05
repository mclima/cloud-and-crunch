import Container from './Container'
import {
  Snowflake,
  ShieldCheck,
  UtensilsCrossed,
} from 'lucide-react'

const items = [
  {
    icon: Snowflake,
    title: 'Servida gelada',
    text: 'Uma sobremesa pronta a servir, mantendo toda a sua cremosidade e qualidade.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Ideal para restauração',
    text: 'Perfeita para restaurantes, cafés e eventos que procuram uma sobremesa diferenciadora.',
  },
  {
    icon: ShieldCheck,
    title: 'Qualidade artesanal',
    text: 'Preparada com dedicação e ingredientes cuidadosamente selecionados.',
  },
]

export default function Why() {
  return (
    <section className="bg-white/40">
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b5a2b]">
            Porque Cloud & Crunch
          </p>

          <h2 className="mb-8 text-5xl text-[#3d2d22]">
            Simplesmente deliciosa.
          </h2>

          <p className="text-lg leading-9 text-stone-700">
            Uma sobremesa criada para oferecer qualidade,
            simplicidade e uma experiência memorável.
          </p>

        </div>

        <div className="grid gap-12 lg:grid-cols-3">

          {items.map((item) => {
            const Icon = item.icon

            return (
              <article
                key={item.title}
                className="text-center"
              >
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-[#efe2d5]">

                  <Icon
                    size={34}
                    className="text-[#8b5a2b]"
                  />

                </div>

                <h3 className="mb-4 text-3xl text-[#3d2d22]">
                  {item.title}
                </h3>

                <p className="leading-8 text-stone-700">
                  {item.text}
                </p>

              </article>
            )
          })}

        </div>

      </Container>
    </section>
  )
}