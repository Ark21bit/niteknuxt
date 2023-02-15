/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./error.vue",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '1':  '[full-start] repeat(1, minmax(0, 1fr))  [full-end]',
        '2':  '[full-start] repeat(2, minmax(0, 1fr))  [full-end]',
        '3':  '[full-start] repeat(3, minmax(0, 1fr))  [full-end]',
        '4':  '[full-start] repeat(4, minmax(0, 1fr))  [full-end]',
        '5':  '[full-start] repeat(5, minmax(0, 1fr))  [full-end]',
        '6':  '[full-start] repeat(6, minmax(0, 1fr))  [full-end]',
        '7':  '[full-start] repeat(7, minmax(0, 1fr))  [full-end]',
        '8':  '[full-start] repeat(8, minmax(0, 1fr))  [full-end]',
        '9':  '[full-start] repeat(9, minmax(0, 1fr))  [full-end]',
        '10': '[full-start] repeat(10, minmax(0, 1fr)) [full-end]',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}