import Head from "next/head";

import AboutMeBanner from "@/components/banners/about-me-banner";

export default function About() {
  return (
    <>
      <Head>
        <title>Sobre mí | HelcsnewsXD</title>
        <meta
          name="description"
          content="Acerca de mí, Emanuel Nicolás Herrador (helcsnewsxd)"
        />
      </Head>

      <AboutMeBanner />

      <div id="content">
        <p>TODO</p>
      </div>
    </>
  );
}
