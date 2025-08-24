// Configuration file for environment variables and app settings
export const config = {
  supabase: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    anonKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '',
  },
  app: {
    name: 'Mufeed IFE',
    description: 'Premium In-Flight Entertainment PWA',
    version: '1.0.0',
  },
  ui: {
    theme: {
      primary: '#1a1a2e',
      secondary: '#16213e',
      accent: '#0f3460',
      background: '#000000',
      surface: '#1a1a2e',
      text: '#ffffff',
      textSecondary: '#b0b0b0',
    },
    breakpoints: {
      mobile: '640px',
      tablet: '768px',
      desktop: '1024px',
      large: '1280px',
    },
  },
};

// Instructions for setting up environment variables
export const ENV_SETUP_INSTRUCTIONS = `
To complete the Supabase setup, create a .env.local file with:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

Get these values from your Supabase project dashboard.
`;
