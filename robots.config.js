export default [
    { UserAgent: '*' },
    { Disallow: '/account' },  
    
    { Sitemap: (req) => `https://${req.headers.host}/sitemap.xml` }
  ]