'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CountriesPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const countries = [
    { name: 'France', flag: 'France.png', code: 'fr', language: 'Français' },
    { name: 'Turquie', flag: 'Turkey.png', code: 'tr', language: 'Turc' },
    { name: 'Italie', flag: 'Italy.png', code: 'it', language: 'Italien' },
    { name: 'Madagascar', flag: 'Madagascar.png', code: 'mg', language: 'Malgache' },
    { name: 'Nigeria', flag: 'Nigeria.png', code: 'ha', language: 'Haoussa' },
    { name: 'Inde', flag: 'India.png', code: 'hi', language: 'Hindi' },
    { name: 'Philippines', flag: 'Philippines.png', code: 'tl', language: 'Tagalog' },
    { name: 'Haïti', flag: 'Haiti.png', code: 'ht', language: 'Créole haïtien' },
    { name: 'Russie', flag: 'Russia.png', code: 'ru', language: 'Russe' },
    { name: 'Hongrie', flag: 'Hungary.png', code: 'hu', language: 'Hongrois' },
    { name: 'Bangladesh', flag: 'Bangladesh.png', code: 'bn', language: 'Bengali' },
    { name: 'Japon', flag: 'Japan.png', code: 'ja', language: 'Japonais' },
    { name: 'Espagne', flag: 'Spain.png', code: 'es', language: 'Espagnol' },
    { name: 'Maroc', flag: 'Morocco.png', code: 'ma', language: 'Darija' },
    { name: 'Chine', flag: 'China.png', code: 'zh', language: 'Mandarin' },
    { name: 'Danemark', flag: 'Denmark.png', code: 'da', language: 'Danois' },
    { name: 'Arabie Saoudite', flag: 'Saudi.png', code: 'ar', language: 'Arabe' },
    { name: 'Grèce', flag: 'Greece.png', code: 'el', language: 'Grec' },
    { name: 'Pakistan', flag: 'Pakistan.png', code: 'ur', language: 'Ourdou' },
    { name: 'Royaume-Uni', flag: 'UK.png', code: 'en-gb', language: 'Anglais' },
    { name: 'Émirats Arabes Unis', flag: 'Emirates.png', code: 'ar-ae', language: 'Arabe' },
    { name: 'Thaïlande', flag: 'Thailand.png', code: 'th', language: 'Thaï' },
    { name: 'Sénégal', flag: 'Senegal.png', code: 'wo', language: 'Wolof' },
    { name: 'Pologne', flag: 'Poland.png', code: 'pl', language: 'Polonais' },
    { name: 'Roumanie', flag: 'Romania.png', code: 'ro', language: 'Roumain' },
    { name: 'États-Unis', flag: 'USA.png', code: 'en-us', language: 'Anglais' },
    { name: 'Albanie', flag: 'Albaniapng.png', code: 'sq', language: 'Albanais' },
    { name: 'Allemagne', flag: 'Germany.png', code: 'de', language: 'Allemand' },
    { name: 'Kenya', flag: 'Kenya.png', code: 'sw', language: 'Swahili' },
    { name: 'Égypte', flag: 'Egypt.png', code: 'ar-eg', language: 'Arabe' }
  ];

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.language.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
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
              <input
                type="text"
                placeholder="Recherche par pays ou langue"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full px-3 py-3 border border-white/20 rounded-lg bg-white/10 backdrop-blur-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 mb-16">
          {filteredCountries.map((country, index) => {
            const clickableCountries = ['Espagne', 'Turquie', 'Albanie', 'Maroc', 'Italie'];
            const isClickable = clickableCountries.includes(country.name);
            
            if (isClickable) {
              return (
                <Link key={index} href={`/choice/${encodeURIComponent(country.name)}`}>
                  <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-4 border-2 border-blue-400/50 hover:border-blue-400 transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-br from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 shadow-lg shadow-blue-500/20">
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
              );
            } else {
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 opacity-60 cursor-not-allowed">
                  <div className="flex flex-col items-center space-y-3">
                    <div className="relative w-12 h-8 rounded overflow-hidden">
                      <Image
                        src={`/images/drapeaux/${country.flag}`}
                        alt={country.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="text-white/70 text-sm font-medium text-center">
                      {country.name}
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Automatic Route Search */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 text-blue-400 mb-4">
            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <span className="text-lg font-medium">Recherche de l&apos;itinéraire automatique...</span>
          </div>
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
