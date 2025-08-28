'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function CultureCategoriesPage() {
  const params = useParams();
  const country = params.country as string;

  const categories = [
    {
      title: 'Relations sociales & politesse',
      description: 'Codes sociaux, salutations et règles de courtoisie',
      icon: '🤝',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Gestes & communication non verbale',
      description: 'Langage corporel et significations culturelles',
      icon: '👋',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Repas & habitudes alimentaires',
      description: 'Traditions culinaires et étiquette à table',
      icon: '🍽️',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Religion & spiritualité',
      description: 'Croyances locales et pratiques religieuses',
      icon: '🕌',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Vie quotidienne & comportements publics',
      description: 'Normes sociales et comportements acceptés',
      icon: '🏘️',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Fêtes & traditions locales',
      description: 'Célébrations et événements culturels importants',
      icon: '🎉',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Faux pas à éviter',
      description: 'Erreurs culturelles communes et comment les éviter',
      icon: '⚠️',
      color: 'from-red-500 to-pink-500'
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
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Découvrez la culture locale
          </h1>
          <p className="text-gray-300 text-lg">
            {country ? decodeURIComponent(country) : 'Destination sélectionnée'}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              href={`/culture/${country}/lesson?category=${encodeURIComponent(category.title)}`}
            >
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className="flex flex-col items-center space-y-4">
                  {/* Icon with gradient background */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl font-bold text-white text-center group-hover:text-green-300 transition-colors">
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
            href={`/choice/${country}`}
            className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au choix des modules
          </Link>
        </div>

      </main>
    </div>
  );
}
