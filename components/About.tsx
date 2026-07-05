import Image from 'next/image'
import Container from './Container'

export default function About() {
  return (
    <section
      id="sobre"
      className="border-t border-stone-200/50 bg-white/30"
    >
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <div className="flex justify-center">

            <Image
              src="/images/cloud-crunch-icon.webp"
              alt="Cloud & Crunch"
              width={240}
              height={240}
              style={{ height: 'auto' }}
            />

          </div>

          <div>

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