export default [
    { UserAgent: '*' },
    { Disallow: '/' },  
    
    { Sitemap: (req) => `https://${req.headers.host}/sitemap.preview.xml` }
  ]