// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[    
    ['nuxt-swiper',{ styleLang: 'css', modules: ['navigation', 'thumbs', 'pagination'],}],            
  ], 
    css: [
        '~/assets/css/fonts.css',        
        '~/assets/css/main.css',  
              
      ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },

})
