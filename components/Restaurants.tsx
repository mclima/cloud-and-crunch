import Container from './Container'
import {
  ChefHat,
  Sparkles,
  PackageCheck,
  HeartHandshake,
} from 'lucide-react'

const features = [
  {
    icon: ChefHat,
    title: 'Produto artesanal',
    description:
      'Preparado com ingredientes cuidadosamente selecionados.',
  },
  {
    icon: PackageCheck,
    title: 'Pronto a servir',
    description:
      'Sem preparação adicional. Basta servir e surpreender.',
  },
  {
    icon: Sparkles,
    title: 'Excelente apresentação',
    description:
      'Uma sobremesa elegante que valoriza qualquer carta.',
  },
  {
    icon: HeartHandshake,
    title: 'Clientes satisfeitos',
    description:
      'Uma experiência memorável que convida a repetir.',
  },
]

export default function Restaurants() {
  return (
    <section
      id="restaurantes"
      className="bg-[#f4ede7]"
    >
      <Container>

        <div className="mx-auto mb-20 max-w-3xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b5a2b]">
            Restaurantes
          </p>

          <h2 className="mb-8 text-5xl leading-tight text-[#3d2d22]">
            Uma sobremesa premium,
            <br />
            pronta a servir.
          </h2>

          <p className="text-lg leading-9 text-stone-700">
            Quer oferecer uma sobremesa diferenciadora sem
            aumentar o trabalho da sua equipa?
            A Cloud & Crunch chega pronta a servir, com uma
            apresentação elegante e um sabor que conquista os
            clientes.
          </p>

        </div>

        <div className="grid gap-px overflow-hidden rounded-3xl bg-stone-300 lg:grid-cols-2">

          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <article
                key={feature.title}
                className="bg-[#faf6f2] p-10 lg:p-12"
              >
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#efe2d5]">

                  <Icon
                    size={28}
                    className="text-[#8b5a2b]"
                  />

                </div>

                <h3 className="mb-4 text-3xl text-[#3d2d22]">
                  {feature.title}
                </h3>

                <p className="leading-8 text-stone-700">
                  {feature.description}
                </p>

              </article>
            )
          })}

        </div>

      </Container>
    </section>
  )
}