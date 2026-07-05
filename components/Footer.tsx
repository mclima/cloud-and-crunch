import Container from './Container'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#2f2219] py-10 text-stone-400">
      <Container>

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          <p>
            © 2026 Cloud & Crunch
          </p>

          <p>
            Feito com leveza para momentos doces.
          </p>

        </div>

      </Container>
    </footer>
  )
}