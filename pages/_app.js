import { Inter } from "next/font/google";
import "@/styles/globals.css"; // Asegúrate que este path sea válido

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
