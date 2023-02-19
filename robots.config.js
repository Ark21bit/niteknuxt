export default [
    { UserAgent: '*' },
    { Disallow: '/Account', },  
    { Disallow: '/Admin', },  
    { Disallow: '/Admin/**', },  
    
    { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
  ]