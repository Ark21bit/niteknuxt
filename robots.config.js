export default [
    { UserAgent: '*' },
    { Disallow: '/Account' },  
    
    { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
  ]