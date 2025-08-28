'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="relative overflow-hidden bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="text-3xl font-bold text-blue-400">MUFEED</div>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
              Découvrir
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Hero Section */}
        <section className="py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            <div className="lg:col-span-3 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Découvrez et apprenez <span className="text-blue-400">la langue</span> et <span className="text-blue-400">les coutumes locales</span> en toute simplicité.
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Plongez dans un voyage immersive et enrichissez votre expérience grâce à des outils interactifs et intuitifs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/countries">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Commencer
                  </button>
                </Link>
                <button className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Découvrir les destinations
                </button>
              </div>
            </div>
            
            {/* Airplane image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-full h-96 max-w-lg">
                <Image
                  src="/images/elements/avion.png"
                  alt="Avion"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Country flags row */}
          <div className="flex justify-center items-center gap-4 mt-16 flex-wrap">
            <div className="relative w-12 h-8 rounded overflow-hidden">
              <Image
                src="/images/drapeaux/Brazilpng.png"
                alt="Brésil"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-12 h-8 rounded overflow-hidden">
              <Image
                src="/images/drapeaux/Germany.png"
                alt="Allemagne"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-12 h-8 rounded overflow-hidden">
              <Image
                src="/images/drapeaux/UK.png"
                alt="Royaume-Uni"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-12 h-8 rounded overflow-hidden">
              <Image
                src="/images/drapeaux/Morocco.png"
                alt="Maroc"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-12 h-8 rounded overflow-hidden">
              <Image
                src="/images/drapeaux/Emirates.png"
                alt="Émirats Arabes Unis"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-12 h-8 rounded overflow-hidden">
              <Image
                src="/images/drapeaux/Albaniapng.png"
                alt="Albanie"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2: Destinations */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Et si votre voyage commençait ici ?
            </h2>
            <p className="text-gray-300 text-lg">
              expressions, coutumes et immersion garantie.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brésil */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-yellow-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🇧🇷</span>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Brésil</h3>
              <p className="text-gray-300 text-center mb-6">
                Apprenez le portugais brésilien pour plonger dans le rythme de la samba et des festivals vibrants.
              </p>
              <div className="text-center">
                <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Commencer →
                </button>
              </div>
            </div>

            {/* Japon */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-white rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🇯🇵</span>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Japon</h3>
              <p className="text-gray-300 text-center mb-6">
                Maîtrisez les expressions clés en japonais pour explorer le Pays du Soleil Levant avec aisance et respect.
              </p>
              <div className="text-center">
                <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Commencer →
                </button>
              </div>
            </div>

            {/* France */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-white to-red-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🇫🇷</span>
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">France</h3>
              <p className="text-gray-300 text-center mb-6">
                Parlez comme un vrai Parisien et plongez dans l&apos;atmosphère unique de la Ville Lumière.
              </p>
              <div className="text-center">
                <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Commencer →
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Flight Time Learning */}
        <section className="py-20 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 my-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
              <div className="lg:col-span-2 order-2 lg:order-1 mt-8">
                {/* Airplane map image */}
                <div className="relative w-full h-[400px]">
                  <Image
                    src="/images/elements/avionmap.png"
                    alt="Carte avec avion"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-3 order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                 Utilisez votre <span className="text-red-400">temps de vol</span> pour apprendre les bases de votre destination.
                </h2>  
                <p className="text-gray-300 text-lg mb-8">
                  Chaque pays a ses propres codes et expressions uniques. Découvrez comment vous intégrer et interagir avec les locaux grâce à nos conseils linguistiques et culturels.
                </p>
                <button className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                  Découvrir
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Travel Success Keys */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Les Clés pour un Voyage Réussi
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Besoin de négocier dans un souk, de commander un plat typique ou d&apos;éviter un faux-pas culturel ? Utilisez votre temps de vol
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Travel tips cards */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/Brazilpng.png"
                    alt="Brésil"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">5 règles de politesse essentielles</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/Brazilpng.png"
                    alt="Brésil"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">10 expressions pour se faire des amis</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/Germany.png"
                    alt="Allemagne"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">15 phrases Clés pour les affaires</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/UK.png"
                    alt="Royaume-Uni"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">8 phrases pour négocier en toute sérénité</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/Morocco.png"
                    alt="Maroc"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">8 phrases pour découvrir les légendes</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/Brazilpng.png"
                    alt="Brésil"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">10 expressions pour découvrir avec les locaux</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/Brazilpng.png"
                    alt="Brésil"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">8 phrases Clés à ne pas oublier</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-green-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/Germany.png"
                    alt="Allemagne"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">7 traditions ancestrales à respecter</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/UK.png"
                    alt="Royaume-Uni"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">Utiliser et expressions pour voyager en toute sérénité</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-3 mx-auto overflow-hidden">
                <div className="relative w-8 h-6">
                  <Image
                    src="/images/drapeaux/Emirates.png"
                    alt="Émirats Arabes Unis"
                    fill
                    className="object-cover rounded"
                  />
                </div>
              </div>
              <p className="text-white text-sm text-center font-medium">8 règles de savoir-vivre à respecter</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-black/30 backdrop-blur-sm border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-300 text-lg mb-6 max-w-4xl mx-auto">
              MUFEED vous accompagne dans votre découverte du monde en vous aidant à apprendre les bases linguistiques et culturelles de votre prochaine destination.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
              <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Contact
              </button>
              <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                À propos
              </button>
            </div>
            
            <div className="border-t border-white/10 pt-6">
              <p className="text-gray-400 text-sm">
                © 2026, All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
