import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',

      paper: '#bbb7ae',
      light: '#d8d4ca',
      dark: '#040301',
      primary: '#216755',
      secondary: '#ba2f2a',
    },
  },
  plugins: [],
};
export default config;
