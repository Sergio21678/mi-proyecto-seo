const BASE_URL = "https://mi-proyecto-seo.vercel.app"; // cambiar en producción

export default async function handler(req, res) {
  // Simulamos "datos dinámicos" desde una supuesta base de datos o CMS
  const dynamicRoutes = ["/", "/blog", "/contacto"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${dynamicRoutes
      .map((url) => `<url><loc>${BASE_URL}${url}</loc></url>`)
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
