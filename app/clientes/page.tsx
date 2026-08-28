'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Script from 'next/script';

const products = [
  {
    name: 'Delícia',
    format: 'Tacinha',
    capacity: '230ml',
    minQuantity: 'Não Aplicável',
    price: '3.00',
    image: '/images/delicia-gelada.webp',
  },
  {
    name: 'Mousse de Manga',
    format: 'Tacinha',
    capacity: '230ml',
    minQuantity: '15',
    price: '2.50',
    image: '/images/mousse-manga-taca-cheia.webp',
  },
  {
    name: 'Mousse de Maracujá com ou sem sementes',
    format: 'Tacinha',
    capacity: '230ml',
    minQuantity: '10',
    price: '3.50',
    image: '/images/mousse-maracuja.webp',
  },
  {
    name: 'Mousse de Morango',
    format: 'Tacinha',
    capacity: '230ml',
    minQuantity: '14',
    price: '3.50',
    image: '/images/mousse-morango.webp',
  },
  {
    name: 'Cheesecake de Morango',
    format: 'Bolo',
    capacity: '26x6,4cm',
    minQuantity: '1',
    price: '35.00',
    image: '/images/strawberry-cheescake.webp',
  },
  {
    name: 'Brownie',
    format: 'Quadrado',
    capacity: '5,5x5,5cm',
    minQuantity: '16',
    price: 'AD',
    image: '/images/brownie-strawberry-ice-cream-molho-chocolate.webp',
  },
  {
    name: 'Gelado de Morango Caseiro',
    format: 'Bola',
    capacity: '40ml',
    minQuantity: '32 (2 bolas por brownie)',
    price: 'AD',
    image: '/images/brownie-strawberry-ice-cream-molho-chocolate.webp',
  },
  {
    name: 'Molho de Chocolate',
    format: 'Dose',
    capacity: '300ml',
    minQuantity: '1',
    price: 'AD',
    priceNote: 'Em testes para determinar quantos brownies cobre (talvez 16)',
    image: '/images/brownie-strawberry-ice-cream-molho-chocolate.webp',
  },
  {
    name: 'Brownie',
    format: 'Quadrado',
    capacity: '5,25x5cm',
    minQuantity: '24',
    price: 'AD',
    image: '/images/brownies-5x5.webp',
  },
   {
    name: 'Tarte Maracujá com ou sem sementes',
    format: 'Tarte',
    capacity: '28cm',
    minQuantity: '1',
    price: '29.00',
    image: '/images/em-breve.webp',
  },
  {
    name: 'Bolo Mocca',
    format: 'Bolo',
    capacity: '16cm',
    minQuantity: '1',
    price: '12.00',
    image: '/images/bolo-mocca-8.webp',
  },
  {
    name: 'Bolo Mocca',
    format: 'Bolo',
    capacity: '24cm',
    minQuantity: '1',
    price: '23.50',
    image: '/images/bolo-mocca-16.webp',
  },
  {
    name: 'Bolo Mocca',
    format: 'Bolo',
    capacity: '28cm',
    minQuantity: '1',
    price: '29.75',
    image: '/images/bolo-mocca-20.webp',
  },
  {
    name: 'Queques Maçã + Passas',
    format: 'Queque',
    capacity: '',
    minQuantity: '12',
    price: '17.50',
    image: '/images/apple-raisin-queques.webp',
  },
  {
    name: 'Salame de Chocolate',
    format: 'Rolo',
    capacity: 'AD',
    minQuantity: '1',
    price: '22.00',
    image: '/images/salame-chocolate-1.webp',
  },
  {
    name: 'Bolo Sária',
    format: 'Bolo',
    capacity: '24"',
    minQuantity: '1',
    price: '32.00',
    priceNote: '+ ± €5.00 recheio | + ± €12.00 toppings (pepitas + fruta)',
    image: '/images/bolo-chocolate-branco.webp',
  },
  {
    name: 'Bolo de Chocolate',
    format: 'Bolo',
    capacity: '24"',
    minQuantity: '1',
    price: '29.75',
    priceNote: '+ ± €10.00 custo de fruta',
    image: '/images/bolo-chocolate-preto.webp',
  },
];

const bonus = {
  name: 'Quiche de Espinafres',
  format: 'Tarte',
  capacity: '30cm',
  minQuantity: '1',
  price: '20.50',
  image: '/images/quiche-espinafres.webp',
};

const packaging = [
  { item: 'Tacinha', capacity: '230ml', cardboard: '0.20', plastic: '0.16' },
  { item: 'Prato deslizante', capacity: '28cm', cardboard: '0.86', plastic: '' },
  { item: 'Prato com Naperon', capacity: '32cm', cardboard: '0.65', plastic: '' },
  { item: 'Caixa', capacity: '30x30x8,5cm', cardboard: '1.10', plastic: '' },
  { item: 'Tulipa Preta (Queques)', capacity: '', cardboard: '0.045', plastic: '' },
  { item: 'Tulipa Creme (Queques)', capacity: '', cardboard: '0.062', plastic: '' },
  { item: 'Forma Cupcake Branca (Queques)', capacity: '', cardboard: '0.015', plastic: '' },
  { item: 'Sacas', capacity: '', cardboard: '0.65', plastic: '' },
];

export default function PrecosPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const CORRECT_PASSWORD = 'lima'; // Change this to your desired password

  useEffect(() => {
    // Check if already authenticated in this session
    const auth = sessionStorage.getItem('clientes_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated || !tableContainerRef.current) return;

    const element = tableContainerRef.current;
    
    const handleScroll = () => {
      if (element) {
        const { scrollLeft, scrollWidth, clientWidth } = element;
        setShowLeftArrow(scrollLeft > 10);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
      }
    };

    // Initial check
    handleScroll();

    element.addEventListener('scroll', handleScroll);
    return () => element.removeEventListener('scroll', handleScroll);
  }, [isAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('clientes_auth', 'true');
      setError('');
    } else {
      setError('Senha incorreta. Tente novamente.');
      setPassword('');
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GGKKZ04FY3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-clientes" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GGKKZ04FY3', {
              page_path: '/clientes'
            });
          `}
        </Script>
      <div className="min-h-screen bg-[#faf6f2] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-md border border-stone-200">
          <h1 className="text-3xl font-bold text-[#3d2d22] mb-2 text-center">
            Tabela de Preços
          </h1>
          <p className="text-stone-600 text-center mb-8">
            Esta página é protegida por senha
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#3d2d22] mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:border-[#8b5a2b] transition"
                placeholder="Digite a senha"
                autoFocus
              />
            </div>
            
            {error && (
              <p className="text-red-600 text-sm">{error}</p>
            )}
            
            <button
              type="submit"
              className="w-full bg-[#8b5a2b] text-white py-3 rounded-xl font-medium hover:bg-[#6e4520] transition"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
      </>
    );
  }

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-GGKKZ04FY3"
        strategy="afterInteractive"
      />
      <Script id="google-analytics-clientes" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GGKKZ04FY3', {
            page_path: '/clientes'
          });
        `}
      </Script>
    <div className="min-h-screen bg-[#faf6f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#3d2d22] mb-4">
            Tabela de Preços
          </h1>
          <p className="text-lg text-stone-700 mb-2">
            Preços em euros (€) - Valores sujeitos a alteração
          </p>
          <p className="text-sm text-[#8b5a2b] font-medium">
            * Os preços dos produtos não incluem embalagem (preços de embalagem no final da página)
          </p>
        </div>

        {/* Main Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#3d2d22] mb-8 border-b-4 border-[#8b5a2b] inline-block pb-2">
            Produtos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-stone-200"
              >
                <div className="relative h-56 bg-[#efe2d5]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index < 3}
                    {...(product.image === '/images/em-breve.webp' ? { loading: 'eager' as const } : {})}
                    className={product.image === '/images/bolo-mocca-20.webp' ? 'object-cover [object-position:center] md:[object-position:center_-150px]' : product.image === '/images/bolo-mocca-8.webp' ? 'object-cover object-[center_63%]' : 'object-cover'}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#3d2d22] mb-3">
                    {product.name}
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Formato:</span>
                      <span>{product.format}</span>
                    </div>
                    {product.capacity && (
                      <div className="flex justify-between">
                        <span className="font-medium">
                          {product.capacity.includes('ml') ? 'Capacidade:' : 'Tamanho:'}
                        </span>
                        <span>{product.capacity}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="font-medium">Qtd. Mínima:</span>
                      <span>{product.minQuantity}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-stone-200">
                    <div className="flex items-center justify-between">
                      <span className="text-stone-600 font-medium">Preço:</span>
                      <span className="text-3xl font-bold text-[#8b5a2b]">
                        €{product.price}
                      </span>
                    </div>
                    {product.priceNote && (
                      <p className="text-xs text-stone-500 mt-2 text-right">
                        {product.priceNote}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonus Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#3d2d22] mb-8 border-b-4 border-[#8b5a2b] inline-block pb-2">
            Bónus
          </h2>
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#8b5a2b]/30">
              <div className="relative h-64 bg-[#efe2d5]">
                <Image
                  src={bonus.image}
                  alt={bonus.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 448px"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#3d2d22] mb-3">
                  {bonus.name}
                </h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Formato:</span>
                    <span>{bonus.format}</span>
                  </div>
                  {bonus.capacity && (
                    <div className="flex justify-between">
                      <span className="font-medium">
                        {bonus.capacity.includes('ml') ? 'Capacidade:' : 'Tamanho:'}
                      </span>
                      <span>{bonus.capacity}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="font-medium">Qtd. Mínima:</span>
                    <span>{bonus.minQuantity}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-stone-200">
                  <div className="flex items-center justify-between">
                    <span className="text-stone-600 font-medium">Preço:</span>
                    <span className="text-3xl font-bold text-[#8b5a2b]">
                      €{bonus.price}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Packaging Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#3d2d22] mb-8 border-b-4 border-[#8b5a2b] inline-block pb-2">
            Embalagem
          </h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden relative">
            {/* Scroll indicators for mobile */}
            <button 
              onClick={() => {
                tableContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
              }}
              id="scroll-left-embalagem"
              className={`absolute left-4 top-[75px] bg-cyan-500 rounded-full p-2 md:hidden z-20 shadow-md hover:bg-cyan-600 active:scale-95 transition-all ${showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll table back to start"
            >
              <svg 
                className="w-5 h-5 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => {
                if (tableContainerRef.current) {
                  tableContainerRef.current.scrollTo({ left: tableContainerRef.current.scrollWidth, behavior: 'smooth' });
                }
              }}
              className={`absolute right-4 top-[75px] bg-cyan-500 rounded-full p-2 md:hidden z-10 shadow-md hover:bg-cyan-600 active:scale-95 transition-transform ${showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              aria-label="Scroll table to see more columns"
            >
              <svg 
                className="w-5 h-5 text-white animate-pulse" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div ref={tableContainerRef} id="embalagem-table-scroll" className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#3d2d22] text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold sticky left-0 bg-[#3d2d22] z-10">
                      Item
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">
                      Capacidade/Tamanho
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">
                      Cartolina/Papel (€)
                    </th>
                    <th className="px-6 py-4 text-right text-sm font-semibold">
                      Plástico (€)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Empty row for arrow overlay - only visible on mobile */}
                  <tr className="md:hidden">
                    <td colSpan={4} className="h-12 bg-gradient-to-r from-cyan-50 to-blue-50"></td>
                  </tr>
                  {packaging.map((item, index) => (
                    <tr
                      key={index}
                      className="group hover:bg-[#efe2d5] transition-colors duration-150"
                    >
                      <td className="px-6 py-4 text-[#3d2d22] font-medium sticky left-0 bg-white group-hover:bg-[#efe2d5] z-10 transition-colors duration-150">
                        {item.item}
                      </td>
                      <td className="px-6 py-4 text-stone-700">
                        {item.capacity}
                      </td>
                      <td className="px-6 py-4 text-right text-[#8b5a2b] font-semibold">
                        {item.cardboard ? `€${item.cardboard}` : '-'}
                      </td>
                      <td className="px-6 py-4 text-right text-[#8b5a2b] font-semibold">
                        {item.plastic ? `€${item.plastic}` : '-'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-stone-600 text-sm mt-12 p-6 bg-white/60 rounded-xl border border-stone-200">
          <p>
           Todos os preços
            são indicativos e podem sofrer alterações.
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
