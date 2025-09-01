'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../components/Header';

export default function CultureCategoriesPage() {
  const params = useParams();
  const country = params.country as string;

  const categories = [
    {
      title: 'Relations sociales & politesse',
      description: 'Codes sociaux, salutations et règles de courtoisie',
      icon: <svg className="w-8 h-8 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/></svg>,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Gestes & communication non verbale',
      description: 'Langage corporel et significations culturelles',
      icon: <svg className="w-8 h-8 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/></svg>,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Repas & habitudes alimentaires',
      description: 'Traditions culinaires et étiquette à table',
      icon: <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1z" clipRule="evenodd"/></svg>,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Religion & spiritualité',
      description: 'Croyances locales et pratiques religieuses',
      icon: <svg className="w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a3 3 0 01-3-3V6z" clipRule="evenodd"/></svg>,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Vie quotidienne & comportements publics',
      description: 'Normes sociales et comportements acceptés',
      icon: <svg className="w-8 h-8 text-green-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/></svg>,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Fêtes & traditions locales',
      description: 'Célébrations et événements culturels importants',
      icon: <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/></svg>,
      color: 'from-yellow-500 to-orange-500'
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header country={country} showFlag={true} moduleType="culture" />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Découvrez les coutumes locale
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
              <div className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-green-500 transition-all duration-300 hover:scale-105 cursor-pointer h-full">
                <div className="flex flex-col items-center space-y-4 h-full justify-between">
                  <div className="flex flex-col items-center space-y-4">
                    {/* Icon without gradient background */}
                    <div>
                      {category.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl font-bold text-white text-center">
                      {category.title}
                    </h3>
                  </div>
                  
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
