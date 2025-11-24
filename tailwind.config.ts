import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0E0F14',
        surface: '#16181E',
        surfaceRetro: '#1C1F26',
        panelHighlight: '#2A2D36',
        neonBlue: '#2ED8F7',
        neonGreen: '#B7FF4A',
        retroMagenta: '#FF4FA7',
        chromeEdge: '#CACDD6',
        textPrimary: '#E6E9F0',
        textRetro: '#C8D2EA',
        textMuted: '#7E8698',
      },
      boxShadow: {
        card: '0 8px 20px rgba(0,0,0,0.45)',
        glow: '0 0 8px rgba(46,216,247,0.5)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
    },
  },
  plugins: [],
};

export default config;

