'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

// Force refresh - Updated 2025-08-31
export default function LanguageMethodPage() {
  const params = useParams();
  const country = params.country as string;

  const methods = [
    {
      title: 'Mini-jeux et quiz interactifs',
      description: 'Apprenez en vous amusant avec des jeux éducatifs',
      icon: '🎮',
      slug: 'mini-quiz',
      enabled: true,
      linkType: 'categories'
    },
    {
      title: 'Écoute et répétition',
      description: 'Perfectionnez votre prononciation',
      icon: '🎧',
      slug: 'ecoute-repetition',
      enabled: false,
      linkType: 'disabled'
    },
    {
      title: 'Exercices pratiques',
      description: 'Mettez en pratique vos connaissances',
      icon: '📝',
      slug: 'exercices-pratiques',
      enabled: true,
      linkType: 'categories'
    },
    {
      title: 'Méthode mixte',
      description: 'Combinez toutes les approches',
      icon: '🔄',
      slug: 'methode-mixte',
      enabled: true,
      linkType: 'direct'
    }
  ];

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
      <main className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Title Section */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comment voulez-vous apprendre ?
            </h1>
            <p className="text-gray-400 text-lg">
              {country ? decodeURIComponent(country) : 'Destination sélectionnée'}
            </p>
          </div>

          {/* Method Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            
            {methods.map((method, index) => {
              // Méthode désactivée
              if (!method.enabled) {
                return (
                  <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 opacity-50 cursor-not-allowed pointer-events-none select-none">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="text-4xl mb-2 opacity-60">
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-400">
                        {method.title}
                      </h3>
                      <p className="text-gray-500 text-sm text-center">
                        {method.description}
                      </p>
                      <p className="text-xs text-gray-600 italic">
                        Bientôt disponible
                      </p>
                    </div>
                  </div>
                );
              }
              
              // Méthode avec lien direct (méthode mixte)
              if (method.linkType === 'direct') {
                return (
                  <Link key={index} href={`/learn/${country}/mixed-method`}>
                    <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="flex flex-col items-center space-y-4">
                        <div className="text-4xl mb-2">
                          {method.icon}
                        </div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-gray-300 text-sm text-center">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              }
              
              // Méthodes avec catégories (quiz et exercices pratiques)
              return (
                <Link key={index} href={`/learn/${country}/categories?method=${method.slug}`}>
                  <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 cursor-pointer">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="text-4xl mb-2">
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                        {method.title}
                      </h3>
                      <p className="text-gray-300 text-sm text-center">
                        {method.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}

          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link 
              href={`/choice/${country}`}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour au choix des modules
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
