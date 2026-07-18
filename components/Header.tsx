import Image from 'next/image'
import Container from './Container'

const links = [
  {
    label: 'Sobre',
    href: '#sobre',
  },
  {
    label: 'Restaurantes',
    href: '#restaurantes',
  },
  {
    label: 'Como Encomendar',
    href: '#encomendar',
  },
  {
    label: 'Porquê',
    href: '#porque',
  },
  {
    label: 'Contacto',
    href: '#contacto',
  },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/40 bg-[#faf6f2]/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-4">
          <Image
            src="/images/cloud-crunch-icon.webp"
            alt="Cloud & Crunch"
            width={52}
            height={52}
            style={{ width: 'auto', height: 'auto' }}
          />

          <span className="font-serif text-3xl text-[#3d2d22]">
            Cloud & Crunch
          </span>
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-stone-700 transition hover:text-[#8b5a2b]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}