// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[    
    ['nuxt-swiper',{ styleLang: 'css', modules: ['navigation', 'thumbs', 'pagination'],}], 
    ['@nuxtjs/robots', {configPath:"~/robots.config.js" }], 
  /*   ['nuxt-simple-sitemap',{hostname:'https://ark21yan-automatic-spork-664p4j64vqxc5pg6-3001.preview.app.github.dev'}] */
  ], 
  
 
    css: [
        '~/assets/css/fonts.css',        
        '~/assets/css/main.css',        
      ]

})
