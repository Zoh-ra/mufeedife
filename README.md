# Mufeed IFE - Premium In-Flight Entertainment PWA

Une Progressive Web App (PWA) moderne inspirée des systèmes de divertissement en vol, construite avec Next.js et Supabase.

## 🚀 Fonctionnalités

- ✨ Interface premium inspirée des systèmes IFE
- 📱 Design responsive (smartphone, tablette, PC)
- 🔄 PWA avec fonctionnalités offline
- 🎨 Interface moderne avec Tailwind CSS
- 🗄️ Base de données Supabase
- ⚡ Next.js 15 avec TypeScript

## 🛠️ Installation

1. **Cloner le projet**
```bash
git clone https://github.com/Zoh-ra/mufeedife.git
cd mufeedife
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration Supabase**
Créer un fichier `.env.local` avec vos clés Supabase :
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📱 PWA Features

- **Manifest configuré** pour l'installation sur mobile/desktop
- **Service Worker** pour le cache et fonctionnalités offline
- **Responsive design** adaptatif à tous les écrans
- **Thème sombre premium** avec gradients

## 🏗️ Structure du projet

```
mufeedife/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Layout principal avec métadonnées PWA
│   │   └── page.tsx        # Page d'accueil avec interface IFE
├── lib/
│   ├── supabase.ts         # Configuration Supabase
│   └── config.ts           # Configuration générale
├── public/
│   ├── manifest.json       # Manifest PWA
│   └── sw.js              # Service Worker
└── README.md
```

## 🎨 Design System

L'interface utilise un thème sombre premium avec :
- **Couleurs principales** : Dégradés bleu/violet
- **Typographie** : Geist (optimisée par Next.js)
- **Composants** : Cards avec backdrop-blur et bordures subtiles
- **Animations** : Transitions fluides et hover effects

## 🔧 Technologies

- **Frontend** : Next.js 15, React 19, TypeScript
- **Styling** : Tailwind CSS 4
- **Database** : Supabase
- **PWA** : Service Worker, Web App Manifest
- **Deployment** : Vercel (recommandé)

## 📦 Scripts disponibles

```bash
npm run dev          # Serveur de développement
npm run build        # Build de production
npm run start        # Serveur de production
npm run lint         # Linting ESLint
```

## 🚀 Déploiement

Le projet est optimisé pour Vercel :

1. Connecter votre repo GitHub à Vercel
2. Ajouter les variables d'environnement Supabase
3. Déployer automatiquement

## 📄 Licence

MIT License - voir le fichier LICENSE pour plus de détails.
