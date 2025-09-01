'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ChoicePage() {
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
      <main className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Title Section */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Apprenez à communiquer ou à comprendre la culture locale
            </h1>
            <p className="text-gray-300 text-lg">
              Choisissez ce qui vous aidera le plus lors de votre voyage
            </p>
          </div>

          {/* Choice Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            
            {/* Country Selection Card */}
            <Link href="/countries">
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 cursor-pointer col-span-1 md:col-span-2">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="text-4xl">🌍</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Choisir ma destination</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Sélectionnez votre pays de destination pour accéder aux modules de langue et de culture adaptés.
                </p>
              </div>
            </Link>

          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link 
              href="/"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour à laccueil
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
