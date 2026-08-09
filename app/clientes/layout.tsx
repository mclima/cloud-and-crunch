import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tabela de Preços - Clientes | Cloud & Crunch',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function PrecosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
