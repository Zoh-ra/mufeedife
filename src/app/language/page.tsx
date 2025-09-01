'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LanguagePage() {
  const [searchTerm, setSearchTerm] = useState('');

  const countries = [
    { name: 'Français', flag: 'France.png', code: 'fr' },
    { name: 'Turc', flag: 'Turkey.png', code: 'tr' },
    { name: 'Italien', flag: 'Italy.png', code: 'it' },
    { name: 'Malgache', flag: 'Madagascar.png', code: 'mg' },
    { name: 'Haoussa', flag: 'Nigeria.png', code: 'ha' },
    { name: 'Hindi', flag: 'India.png', code: 'hi' },
    { name: 'Tagalog', flag: 'Philippines.png', code: 'tl' },
    { name: 'Créole', flag: 'Haiti.png', code: 'ht' },
    { name: 'Russe', flag: 'Russia.png', code: 'ru' },
    { name: 'Hongrois', flag: 'Hungary.png', code: 'hu' },
    { name: 'Bengali', flag: 'Bangladesh.png', code: 'bn' },
    { name: 'Japonais', flag: 'Japan.png', code: 'ja' },
    { name: 'Espagnol', flag: 'Spain.png', code: 'es' },
    { name: 'Dari', flag: 'Afghanistan.png', code: 'prs' },
    { name: 'Mandarin', flag: 'China.png', code: 'zh' },
    { name: 'Danois', flag: 'Denmark.png', code: 'da' },
    { name: 'Arabe', flag: 'Saudi.png', code: 'ar' },
    { name: 'Grec', flag: 'Greece.png', code: 'el' },
    { name: 'Urdu', flag: 'Pakistan.png', code: 'ur' },
    { name: 'Anglais UK', flag: 'UK.png', code: 'en-gb' },
    { name: 'Émirati', flag: 'Emirates.png', code: 'ar-ae' },
    { name: 'Thaï', flag: 'Thailand.png', code: 'th' },
    { name: 'Russe', flag: 'Russia.png', code: 'ru' },
    { name: 'Wolof', flag: 'Senegal.png', code: 'wo' },
    { name: 'Polonais', flag: 'Poland.png', code: 'pl' },
    { name: 'Roumain', flag: 'Romania.png', code: 'ro' },
    { name: 'Hawaiien', flag: 'USA.png', code: 'haw' },
    { name: 'Hindi', flag: 'India.png', code: 'hi' },
    { name: 'Coréen', flag: 'Korea.png', code: 'ko' },
    { name: 'Pashto', flag: 'Afghanistan.png', code: 'ps' },
    { name: 'Anglais US', flag: 'USA.png', code: 'en-us' },
    { name: 'Albanais', flag: 'Albaniapng.png', code: 'sq' },
    { name: 'Allemand', flag: 'Germany.png', code: 'de' },
    { name: 'Swahili', flag: 'Kenya.png', code: 'sw' },
    { name: 'Égyptien', flag: 'Egypt.png', code: 'ar-eg' }
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
            Quelle langue souhaitez-vous apprendre ?
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
            <Link key={index} href={`/learn/${encodeURIComponent(country.name)}`}>
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

        {/* Automatic Recommendation Section */}
        <div className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">
                Recommandation automatique selon ma destination...
              </h3>
            </div>
            <p className="text-gray-300">
              Nous analysons votre destination pour vous proposer la langue la plus utile à apprendre.
            </p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/choice"
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au choix
          </Link>
        </div>

      </main>
    </div>
  );
}
