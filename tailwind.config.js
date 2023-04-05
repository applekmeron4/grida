/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        success: '#47B881',
        warning: '#F2AA52',
        error: '#F26460',
        info: '#2F80ED',
      },
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
}
