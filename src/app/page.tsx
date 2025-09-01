'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
              <Image 
                src="/images/logo/logoMufeed.png" 
                alt="MUFEED Logo" 
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </div>
            <button className="bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition-all duration-300 animate-pulse font-semibold">
              Commencer
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
                Découvrez et apprenez <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent animate-pulse">la langue</span> et <span className="bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent animate-pulse">les coutumes locales</span> en toute simplicité.
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Plongez dans un voyage immersive et enrichissez votre expérience grâce à des outils interactifs et intuitifs.
              </p>
              <div className="flex justify-center lg:justify-start">
                <Link href="/countries">
                  <button className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                    Découvrir les destinations
                  </button>
                </Link>
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

          {/* Country flags row with scrolling animation */}
          <div className="mt-16 overflow-hidden">
            <div className="flex animate-scroll gap-6 w-max">
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Brazilpng.png"
                  alt="Brésil"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Germany.png"
                  alt="Allemagne"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/UK.png"
                  alt="Royaume-Uni"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Morocco.png"
                  alt="Maroc"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Emirates.png"
                  alt="Émirats"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Japan.png"
                  alt="Japon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Turkey.png"
                  alt="Turquie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Albaniapng.png"
                  alt="Albanie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Senegal.png"
                  alt="Sénégal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/SouthKorea.png"
                  alt="Corée du Sud"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Pakistan.png"
                  alt="Pakistan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Romani.png"
                  alt="Roumanie"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Duplicate for seamless loop */}
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Brazilpng.png"
                  alt="Brésil"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Germany.png"
                  alt="Allemagne"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/UK.png"
                  alt="Royaume-Uni"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Morocco.png"
                  alt="Maroc"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Emirates.png"
                  alt="Émirats"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Japan.png"
                  alt="Japon"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Turkey.png"
                  alt="Turquie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Albaniapng.png"
                  alt="Albanie"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Senegal.png"
                  alt="Sénégal"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/SouthKorea.png"
                  alt="Corée du Sud"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Pakistan.png"
                  alt="Pakistan"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-12 h-8 rounded overflow-hidden flex-shrink-0">
                <Image
                  src="/images/drapeaux/Romani.png"
                  alt="Roumanie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
          <style jsx>{`
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll {
              animation: scroll 20s linear infinite;
            }
          `}</style>
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
            {/* Maroc */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="mb-6 mx-auto flex justify-center">
                <Image 
                  src="/images/drapeaux/Morocco.png" 
                  alt="Maroc" 
                  width={64}
                  height={48}
                  className="object-contain rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Maroc</h3>
              <p className="text-gray-400 text-center mb-6">
                Plongez dans la culture marocaine avec des expressions en darija, pour vivre l&apos;hospitalité, les marchés animés, les tajines et les souks avec aisance et curiosité.
              </p>
              <div className="text-center">
                <Link 
                  href="/choice/Maroc"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Commencer
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Espagne */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="mb-6 mx-auto flex justify-center">
                <Image 
                  src="/images/drapeaux/Spain.png" 
                  alt="Espagne" 
                  width={64}
                  height={48}
                  className="object-contain rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Espagne</h3>
              <p className="text-gray-400 text-center mb-6">
                Adoptez l&apos;espagnol d&apos;Espagne au quotidien : des tapas aux beaux-arts, parlez comme un local en explorant villes historiques, fiestas et rythme de vie si particuliers.
              </p>
              <div className="text-center">
                <Link 
                  href="/choice/Espagne"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Commencer
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Albanie */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
              <div className="mb-6 mx-auto flex justify-center">
                <Image 
                  src="/images/drapeaux/Albaniapng.png" 
                  alt="Albanie" 
                  width={64}
                  height={48}
                  className="object-contain rounded-md"
                />
              </div>
              <h3 className="text-2xl font-bold text-white text-center mb-4">Albanie</h3>
              <p className="text-gray-400 text-center mb-6">
                Apprenez l&apos;albanais pour vous immerger dans les paysages préservés, l&apos;esprit balkanique et la chaleur de l&apos;hospitalité albanaise, entre montagnes, mer et patrimoine ancestral.
              </p>
              <div className="text-center">
                <Link 
                  href="/choice/Albanie"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                >
                  Commencer
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Flight Time Learning */}
        <section className="py-16 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 my-20">
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-2 order-2 lg:order-1">
                {/* Airplane map image */}
                <div className="relative w-full h-[300px]">
                  <Image
                    src="/images/elements/avionmap.png"
                    alt="Carte avec avion"
                    fill
                    className="object-cover rounded-2xl"
                  />
                </div>
              </div>
              
              <div className="lg:col-span-3 order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                 Utilisez votre <span className="bg-gradient-to-r from-red-400 to-orange-300 bg-clip-text text-transparent animate-pulse">temps de vol</span> pour apprendre les bases de votre destination.
                </h2>  
                <p className="text-gray-400 text-lg mb-6">
                  Chaque pays a ses propres codes et expressions uniques. Découvrez comment vous intégrer et interagir avec les locaux grâce à nos conseils linguistiques et culturels.
                </p>
                <Link href="/countries" className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-semibold transition-colors inline-block">
                  Découvrir
                </Link>
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
            {/* Turquie - Cliquable */}
            <Link href="/choice/Turquie" className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 block">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/Turkey.png"
                  alt="Turquie"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">5 règles de politesse essentielles</p>
            </Link>

            {/* France - Non cliquable */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 opacity-50 cursor-not-allowed">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/France.png"
                  alt="France"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">10 expressions pour se faire des amis</p>
            </div>

            {/* Allemagne - Non cliquable */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 opacity-50 cursor-not-allowed">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/Germany.png"
                  alt="Allemagne"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">15 phrases clés pour les affaires</p>
            </div>

            {/* Maroc - Cliquable */}
            <Link href="/choice/Maroc" className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 block">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/Morocco.png"
                  alt="Maroc"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">8 phrases pour négocier en toute sérénité</p>
            </Link>

            {/* Albanie - Cliquable */}
            <Link href="/choice/Albanie" className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 block">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/Albaniapng.png"
                  alt="Albanie"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">8 phrases pour découvrir les légendes</p>
            </Link>

            {/* Espagne - Cliquable */}
            <Link href="/choice/Espagne" className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 block">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/Spain.png"
                  alt="Espagne"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">10 expressions pour découvrir avec les locaux</p>
            </Link>

            {/* Italie - Cliquable */}
            <Link href="/choice/Italie" className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 block">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/Italy.png"
                  alt="Italie"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">8 phrases clés à ne pas oublier</p>
            </Link>

            {/* Emirats - Non cliquable */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 opacity-50 cursor-not-allowed">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/Emirates.png"
                  alt="Emirats"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">7 traditions ancestrales à respecter</p>
            </div>

            {/* Sénégal - Non cliquable */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 opacity-50 cursor-not-allowed">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/Senegal.png"
                  alt="Sénégal"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">Utiliser et expressions pour voyager en toute sérénité</p>
            </div>

            {/* Etats-Unis - Non cliquable */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 opacity-50 cursor-not-allowed">
              <div className="mb-3 mx-auto flex justify-center">
                <Image
                  src="/images/drapeaux/USA.png"
                  alt="Etats-Unis"
                  width={48}
                  height={32}
                  className="object-contain rounded-sm"
                />
              </div>
              <p className="text-white text-sm text-center font-medium">Découvrir les traditions et coutumes</p>
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
