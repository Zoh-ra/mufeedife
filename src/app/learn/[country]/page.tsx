'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function LearnMethodPage() {
  const params = useParams();
  const country = params.country as string;

  const methods = [
    {
      title: 'Mini-jeux et quiz interactifs',
      description: 'Apprenez en vous amusant avec des jeux éducatifs',
      icon: <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/></svg>,
      slug: 'mini-quiz',
      enabled: true,
      linkType: 'categories'
    },
    {
      title: 'Écoute et répétition',
      description: 'Perfectionnez votre prononciation',
      icon: <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/></svg>,
      slug: 'ecoute-repetition',
      enabled: false,
      linkType: 'disabled'
    },
    {
      title: 'Exercices pratiques',
      description: 'Mettez en pratique vos connaissances',
      icon: <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/><path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h4a2 2 0 002-2V3a2 2 0 012 2v6h-3V8a1 1 0 10-2 0v3H4V5zM3 19a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/></svg>,
      slug: 'exercices-pratiques',
      enabled: true,
      linkType: 'categories'
    },
    {
      title: 'Méthode mixte',
      description: 'Combinez toutes les approches',
      icon: <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/></svg>,
      slug: 'methode-mixte',
      enabled: true,
      linkType: 'direct'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header country={country} showFlag={true} moduleType="language" />

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Title Section */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Comment voulez-vous apprendre ?
            </h1>
            <p className="text-gray-400 text-lg">
              {country ? decodeURIComponent(country) : 'abcd'}
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
              href="/language"
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux langues
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
