'use client';

import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Header from '../../../../components/Header';

export default function LessonPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const country = params.country as string;
  const method = searchParams.get('method') || '';
  const category = searchParams.get('category') || '';

  const getMethodDisplayName = (methodParam: string) => {
    const methodMap: { [key: string]: string } = {
      'mini-quiz': 'Mini-jeux et quiz interactifs',
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
      <main className="flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Title Section */}
          <div className="mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Leçon en cours de développement
            </h1>
            <div className="space-y-2 mb-8">
              <p className="text-gray-300 text-lg">
                Langue : {country ? decodeURIComponent(country) : 'Non spécifiée'}
              </p>
              <p className="text-blue-300 text-base">
                Méthode : {getMethodDisplayName(method)}
              </p>
              <p className="text-green-300 text-base">
                Catégorie : {category ? decodeURIComponent(category) : 'Non spécifiée'}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-4">🚧</div>
              <p className="text-gray-300 text-lg">
                Cette section est en cours de développement. Bientôt disponible !
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link 
              href={`/learn/${country}/categories?method=${method}`}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux catégories
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
