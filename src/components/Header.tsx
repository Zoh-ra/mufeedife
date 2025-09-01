'use client';

import Link from 'next/link';
import Image from 'next/image';

interface HeaderProps {
  country?: string;
  showFlag?: boolean;
  moduleType?: 'language' | 'culture';
}

const countryFlags: { [key: string]: string } = {
  'Maroc': 'Morocco.png',
  'Espagne': 'Spain.png',
  'Turquie': 'Turkey.png',
  'Albanie': 'Albaniapng.png',
  'Italie': 'Italy.png',
  'France': 'France.png',
  'Allemagne': 'Germany.png',
  'Royaume-Uni': 'UK.png',
  'États-Unis': 'USA.png',
  'Japon': 'Japan.png',
  'Chine': 'China.png'
};

export default function Header({ country, showFlag = false, moduleType }: HeaderProps) {
  const decodedCountry = country ? decodeURIComponent(country) : '';
  const flagImage = decodedCountry ? countryFlags[decodedCountry] : null;

  const getModuleIcon = () => {
    if (moduleType === 'language') {
      return '/images/elements/eclairorange.png';
    } else if (moduleType === 'culture') {
      return '/images/elements/eclairvert.png';
    }
    return null;
  };

  const moduleIcon = getModuleIcon();

  return (
    <header className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-4">
            <Image 
              src="/images/logo/logoMufeed.png" 
              alt="MUFEED Logo" 
              width={120}
              height={48}
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Flight Info Center */}
          <div className="hidden md:flex items-center space-x-6 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
              </svg>
              <div className="text-white text-sm">
                <div className="font-semibold">Vol AF 1234</div>
                <div className="text-gray-300 text-xs">En cours</div>
              </div>
            </div>
            
            <div className="w-px h-8 bg-white/20"></div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>
              </svg>
              <div className="text-white text-sm">
                <div className="font-semibold">22°C</div>
                <div className="text-gray-300 text-xs">Ensoleillé</div>
              </div>
            </div>
            
            <div className="w-px h-8 bg-white/20"></div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12"/>
              </svg>
              <div className="text-white text-sm">
                <div className="font-semibold">10,500m</div>
                <div className="text-gray-300 text-xs">Altitude</div>
              </div>
            </div>
            
            <div className="w-px h-8 bg-white/20"></div>
            
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
              <div className="text-white text-sm">
                <div className="font-semibold">850 km/h</div>
                <div className="text-gray-300 text-xs">Vitesse</div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {moduleIcon && (
              <div className="relative w-12 h-12">
                <Image
                  src={moduleIcon}
                  alt={moduleType === 'language' ? 'Module Langue' : 'Module Coutume'}
                  fill
                  className="object-contain"
                />
              </div>
            )}
            
            {showFlag && flagImage && (
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-8 rounded overflow-hidden">
                  <Image
                    src={`/images/drapeaux/${flagImage}`}
                    alt={decodedCountry}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="text-white font-medium">{decodedCountry}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
