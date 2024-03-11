import "@/styles/globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import type { AppProps } from "next/app";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </div>
        <div className="drawer-side z-[2500]">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-8/12 min-h-full bg-base-200 text-base-content">
            <li>
              <Link href="/">Principal</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/about">Sobre mí</Link>
            </li>
            <li>
              <Link href="/projects">Proyectos</Link>
            </li>
            <li>
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>

      <SpeedInsights />
    </>
  );
}
