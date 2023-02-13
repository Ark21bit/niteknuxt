// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[    
    'nuxt-simple-sitemap',
    ['nuxt-swiper',{ styleLang: 'css', modules: ['navigation', 'thumbs', 'pagination'],}], 
    ['@nuxtjs/robots', {configPath:"~/robots.config.js" }],     
  ],   

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ]
    }
  },

  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml  
    '/account': { index: false },
    '/Account': { index: false },
   
  }

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://ark21bit-opulent-goggles-5p9vvv65w9437v6g-3001.preview.app.github.dev',
      apiBase:'http://localhost:3000',
    }
  },

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

  app:{
    head:{
      meta:[
        {name:"yandex-verification", content:"f6734357f8e34199"}
      ]
    }
  }

})
