'use client';

import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../../components/Header';

export default function CategoriesPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const country = params.country as string;
  const method = searchParams.get('method') || '';

  const categories = [
    {
      title: 'Aéroport',
      id: 'airport',
      description: 'Vocabulaire pour les contrôles, bagages et procédures',
      icon: <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"/></svg>,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Hébergement',
      id: 'accommodation',
      description: 'Communication avec les hôtels et logements',
      icon: <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Restaurant',
      id: 'restaurant',
      description: 'Commander, payer et découvrir la cuisine locale',
      icon: <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"/></svg>,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Transports locaux',
      id: 'transport',
      description: 'Bus, métro, taxi et moyens de transport',
      icon: <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 012 2v6a2 2 0 002 2h2a2 2 0 002-2V8a2 2 0 00-2-2H4z" clipRule="evenodd"/></svg>,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Salutations & Politesse',
      id: 'greetings',
      description: 'Formules de courtoisie et interactions sociales',
      icon: <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"/></svg>,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Shopping & Argent',
      id: 'shopping',
      description: 'Achats, négociation et gestion financière',
      icon: <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"/></svg>,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Orientation',
      id: 'orientation',
      description: 'Demander son chemin et se repérer',
      icon: <svg className="w-8 h-8 text-teal-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>,
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Santé & sécurité',
      id: 'health',
      description: 'Urgences médicales et situations de sécurité',
      icon: <svg className="w-8 h-8 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd"/></svg>,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Urgences administratives',
      id: 'admin',
      description: 'Consulats, police et démarches officielles',
      icon: <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd"/></svg>,
      color: 'from-gray-500 to-slate-500'
    },
    {
      title: 'Événements & Loisirs',
      id: 'events',
      description: 'Activités culturelles et divertissements',
      icon: <svg className="w-8 h-8 text-violet-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm3 2h6a1 1 0 110 2H7a1 1 0 110-2zm0 4h6a1 1 0 110 2H7a1 1 0 110-2zm0 4h4a1 1 0 110 2H7a1 1 0 110-2z" clipRule="evenodd"/></svg>,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  const getMethodDisplayName = (methodParam: string) => {
    const methodMap: { [key: string]: string } = {
      'mini-quiz': 'Quiz interactifs',
      'ecoute-repetition': 'Écoute et répétition',
      'exercices-pratiques': 'Exercices pratiques',
      'methode-mixte': 'Méthode mixte'
    };
    return methodMap[methodParam] || methodParam;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header country={country} showFlag={true} moduleType="language" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choisissez une catégorie
          </h1>
          <div className="space-y-2">
            <p className="text-gray-300 text-lg">
              {country ? decodeURIComponent(country) : 'Langue sélectionnée'}
            </p>
            <p className="text-blue-300 text-base">
              Méthode : {getMethodDisplayName(method)}
            </p>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={method === 'mini-quiz' 
                ? `/learn/${country}/lesson/quiz?category=${category.id}`
                : method === 'exercices-pratiques'
                ? `/learn/${country}/lesson/exercise?category=${category.id}`
                : `/learn/${country}/lesson?method=${method}&category=${encodeURIComponent(category.title)}`
              }
            >
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon */}
                  <div className="mb-2">
                    {category.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white text-center">
                    {category.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm text-center leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link 
            href={`/language/${country}`}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour aux méthodes d&apos;apprentissage
          </Link>
        </div>

      </main>
    </div>
  );
}
