import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Mi Sitio Optimizado</title>
        <meta name="description" content="Explora artículos sobre SEO, rendimiento y desarrollo web." />
        <meta name="keywords" content="blog, SEO, rendimiento, desarrollo web" />
        <meta property="og:title" content="Blog de Mi Sitio Optimizado" />
        <meta property="og:description" content="Aprende con artículos prácticos sobre desarrollo web." />
        <meta property="og:image" content="/images/seo-imagen.png" />
        <meta property="og:type" content="article" />
      </Head>

      <h1>Blog</h1>
      <p>Contenido de blog en construcción.</p>
    </>
  );
}
