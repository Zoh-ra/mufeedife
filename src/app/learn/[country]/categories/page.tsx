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
      icon: '✈️',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Hébergement',
      id: 'accommodation',
      description: 'Communication avec les hôtels et logements',
      icon: '🏨',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Restaurant',
      id: 'restaurant',
      description: 'Commander, payer et découvrir la cuisine locale',
      icon: '🍽️',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Transports locaux',
      id: 'transport',
      description: 'Bus, métro, taxi et moyens de transport',
      icon: '🚌',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Salutations & Politesse',
      id: 'greetings',
      description: 'Formules de courtoisie et interactions sociales',
      icon: '👋',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Shopping & Argent',
      id: 'shopping',
      description: 'Achats, négociation et gestion financière',
      icon: '🛍️',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Orientation',
      id: 'orientation',
      description: 'Demander son chemin et se repérer',
      icon: '🧭',
      color: 'from-teal-500 to-green-500'
    },
    {
      title: 'Santé & sécurité',
      id: 'health',
      description: 'Urgences médicales et situations de sécurité',
      icon: '🏥',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Urgences administratives',
      id: 'admin',
      description: 'Consulats, police et démarches officielles',
      icon: '📋',
      color: 'from-gray-500 to-slate-500'
    },
    {
      title: 'Événements & Loisirs',
      id: 'events',
      description: 'Activités culturelles et divertissements',
      icon: '🎭',
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
                  <div className="text-4xl mb-2">
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
