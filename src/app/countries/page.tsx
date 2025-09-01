'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const countries = [
    { name: 'France', flag: 'France.png', code: 'fr' },
    { name: 'Turquie', flag: 'Turkey.png', code: 'tr' },
    { name: 'Italie', flag: 'Italy.png', code: 'it' },
    { name: 'Madagascar', flag: 'Madagascar.png', code: 'mg' },
    { name: 'Nigeria', flag: 'Nigeria.png', code: 'ha' },
    { name: 'Inde', flag: 'India.png', code: 'hi' },
    { name: 'Philippines', flag: 'Philippines.png', code: 'tl' },
    { name: 'Haïti', flag: 'Haiti.png', code: 'ht' },
    { name: 'Russie', flag: 'Russia.png', code: 'ru' },
    { name: 'Hongrie', flag: 'Hungary.png', code: 'hu' },
    { name: 'Bangladesh', flag: 'Bangladesh.png', code: 'bn' },
    { name: 'Japon', flag: 'Japan.png', code: 'ja' },
    { name: 'Espagne', flag: 'Spain.png', code: 'es' },
    { name: 'Maroc', flag: 'Morocco.png', code: 'ma' },
    { name: 'Chine', flag: 'China.png', code: 'zh' },
    { name: 'Danemark', flag: 'Denmark.png', code: 'da' },
    { name: 'Arabie Saoudite', flag: 'Saudi.png', code: 'ar' },
    { name: 'Grèce', flag: 'Greece.png', code: 'el' },
    { name: 'Pakistan', flag: 'Pakistan.png', code: 'ur' },
    { name: 'Royaume-Uni', flag: 'UK.png', code: 'en-gb' },
    { name: 'Émirats Arabes Unis', flag: 'Emirates.png', code: 'ar-ae' },
    { name: 'Thaïlande', flag: 'Thailand.png', code: 'th' },
    { name: 'Sénégal', flag: 'Senegal.png', code: 'wo' },
    { name: 'Pologne', flag: 'Poland.png', code: 'pl' },
    { name: 'Roumanie', flag: 'Romania.png', code: 'ro' },
    { name: 'États-Unis', flag: 'USA.png', code: 'en-us' },
    { name: 'Albanie', flag: 'Albaniapng.png', code: 'sq' },
    { name: 'Allemagne', flag: 'Germany.png', code: 'de' },
    { name: 'Kenya', flag: 'Kenya.png', code: 'sw' },
    { name: 'Égypte', flag: 'Egypt.png', code: 'ar-eg' }
  ];

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-blue-400">MUFEED</div>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">
            Quelle est votre destination ?
          </h1>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Recherche par pays"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-16">
          {filteredCountries.map((country, index) => (
            <Link key={index} href={`/choice/${encodeURIComponent(country.name)}`}>
              <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex flex-col items-center space-y-3">
                  <div className="relative w-12 h-8 rounded overflow-hidden">
                    <Image
                      src={`/images/drapeaux/${country.flag}`}
                      alt={country.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <span className="text-white text-sm font-medium text-center group-hover:text-blue-300 transition-colors">
                    {country.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </div>

      </main>
    </div>
  );
}
