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
        // Migration Museum Brand Colors
        'mm-blue': '#5A5FEF',
        'mm-violet': '#A880FF',
        'mm-orange': '#FF5C45',
        'mm-yellow': '#FFD700',
        'mm-green': '#59F5B1',
        'mm-tan': '#938664',
        'mm-black': '#000000',
        'mm-grey': '#757575', // WCAG AA compliant (4.5:1 contrast on white)
        'mm-grey-mid': '#D1D1D1',
        'mm-grey-light': '#E5E5E5',
        'mm-white': '#FFFFFF',
      },
      fontFamily: {
        sans: ['var(--font-work-sans)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
