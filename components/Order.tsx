import Container from './Container'

const steps = [
  {
    number: '01',
    title: 'Indique a quantidade',
    description:
      'Diga-nos quantas unidades pretende encomendar.',
  },
  {
    number: '02',
    title: 'Entre em contacto',
    description:
      'Fale connosco por telefone ou email para confirmar a encomenda.',
  },
  {
    number: '03',
    title: 'Receba a encomenda',
    description:
      'Combinamos a entrega para que receba tudo pronto a servir.',
  },
]

export default function Order() {
  return (
    <section id="encomendar">
      <Container>

        <div className="mx-auto mb-24 max-w-3xl text-center">

          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#8b5a2b]">
            Como Encomendar
          </p>

          <h2 className="mb-8 text-5xl text-[#3d2d22]">
            É simples.
          </h2>

          <p className="text-lg leading-9 text-stone-700">
            Em apenas três passos pode ter a Cloud & Crunch
            pronta para servir.
          </p>

        </div>

        <div className="grid gap-16 lg:grid-cols-3">

          {steps.map((step) => (
            <div
              key={step.number}
              className="relative"
            >

              <div className="mb-10 flex items-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#8b5a2b] text-xl font-semibold text-white">
                  {step.number}
                </div>

                <div className="ml-6 hidden h-px flex-1 bg-[#d9c9bb] lg:block" />

              </div>

              <h3 className="mb-5 text-3xl text-[#3d2d22]">
                {step.title}
              </h3>

              <p className="leading-8 text-stone-700">
                {step.description}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  )
}