import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";

// Lazy load del componente
const DynamicComponent = dynamic(() => import("../components/LargeComponent"), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <meta name="google-site-verification" content="w1TecVs6uB8w_dWx2_rgKmIiHfJbBf8tikOuClAvAhI" />
        <title>Mi Sitio Optimizado - Home</title>
        <meta name="description" content="Aprende sobre optimización SEO y rendimiento en Next.js." />
        <meta name="keywords" content="Next.js, SEO, optimización web" />
        <meta property="og:title" content="Mi Sitio Optimizado" />
        <meta property="og:description" content="Descubre técnicas avanzadas para mejorar tu web con Next.js." />
        <meta property="og:image" content="/images/seo-imagen.png" />
        <meta property="og:type" content="website" />
      </Head>

      <h1>Bienvenido</h1>

      <Image
        src="/images/seo-imagen.png"
        width={800}
        height={400}
        alt="Ejemplo de imagen optimizada"
        priority
      />

      {/* Componente cargado con Lazy Loading */}
      <DynamicComponent />
    </>
  );
}
