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
        // Xbox 360 colors
        'xbox-green': '#107C10',
        'xbox-glow': '#52B043',
        'neon-pink': '#FF4FA7',
        'asphalt': '#0E0F14',
        'asphalt-light': '#1A1C23',
        'chrome': '#C0C0C0',
      },
      boxShadow: {
        card: '0 8px 20px rgba(0,0,0,0.45)',
        glow: '0 0 8px rgba(46,216,247,0.5)',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      fontFamily: {
        heading: ['var(--font-russo)', 'sans-serif'],
        tech: ['var(--font-rajdhani)', 'monospace'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'blade-in': 'bladeSlide 0.5s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        bladeSlide: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(82, 176, 67, 0.5)' },
          '50%': { boxShadow: '0 0 40px rgba(82, 176, 67, 0.8)' },
        },
      },
      backgroundImage: {
        'xbox-gradient': 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
        'blade-gradient': 'linear-gradient(90deg, rgba(82, 176, 67, 0.1) 0%, rgba(16, 124, 16, 0.05) 100%)',
        'chrome-gradient': 'linear-gradient(180deg, #e0e0e0 0%, #808080 50%, #404040 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

