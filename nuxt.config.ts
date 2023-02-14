// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules:[    
    'nuxt-simple-sitemap',
    ['nuxt-swiper',{ styleLang: 'css', modules: ['navigation', 'thumbs', 'pagination'],}], 
    ['@nuxtjs/robots', {configPath:"~/robots.config.js" }],     
    ['@pinia/nuxt',{autoImports: ['defineStore', 'acceptHMRUpdate'],},],
  ],   

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
      ]
    }
  },

  imports: {
    dirs: ['stores'],
  },

  routeRules: {
    // Don't add any /secret/** URLs to the sitemap.xml  
    '/account': { index: false },
    '/Account': { index: false },
   
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://ark21bit-opulent-goggles-5p9vvv65w9437v6g-3001.preview.app.github.dev',
      apiBase:'https://vast-red-dove-kit.cyclic.app',
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
        {name:"google-site-verification", content:"m739jUQraET8qY2wQrH_u34_xSOiCQYiFS_ylLS4mLI"},
        {name:"robots", content:"all"}
      ],      
      link:[
        { rel: 'icon', type: 'image/x-icon', href: '~/assets/img/favicon.ico' }
      ],
    }
  }

})
