'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function MixedMethodPage() {
  const params = useParams();
  const country = params.country as string;

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
              Méthode Mixte
            </h1>
            <p className="text-gray-400 text-lg mb-4">
              {country ? decodeURIComponent(country) : 'Destination sélectionnée'}
            </p>
            <p className="text-blue-300 text-xl">
              Combinez toutes les approches d'apprentissage
            </p>
          </div>

          {/* Coming Soon Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-12 border border-white/20 max-w-2xl mx-auto">
            <div className="text-6xl mb-6">🔄</div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Bientôt disponible
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              La méthode mixte combinera quiz interactifs, exercices pratiques et écoute pour une expérience d'apprentissage complète.
            </p>
            <div className="space-y-3 text-left">
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                Quiz adaptatifs selon votre niveau
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                Exercices pratiques contextualisés
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                Sessions d'écoute et répétition
              </div>
              <div className="flex items-center text-gray-300">
                <span className="text-green-400 mr-3">✓</span>
                Progression personnalisée
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link 
              href={`/language/${country}`}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux méthodes d'apprentissage
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
