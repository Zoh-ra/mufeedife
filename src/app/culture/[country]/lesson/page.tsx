'use client';

import { useParams, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function CultureLessonPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const country = params.country as string;
  const category = searchParams.get('category') || '';

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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Leçon culturelle en développement
            </h1>
            <div className="space-y-2 mb-8">
              <p className="text-gray-300 text-lg">
                Destination : {country ? decodeURIComponent(country) : 'Non spécifiée'}
              </p>
              <p className="text-green-300 text-base">
                Catégorie : {category ? decodeURIComponent(category) : 'Non spécifiée'}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-6xl mb-4">🏛️</div>
              <p className="text-gray-300 text-lg">
                Cette section culturelle est en cours de développement. Bientôt disponible !
              </p>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-12">
            <Link 
              href={`/culture/${country}`}
              className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Retour aux catégories culturelles
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
