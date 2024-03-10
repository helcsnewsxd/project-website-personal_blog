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
        <div className="py-5 px-4 lg:px-10">
          <div className="bg-base-100 lg:shadow-2xl shadow-lg lg:rounded-3xl rounded-xl lg:p-10 p-4">
            {/* Who am i? */}
            <section className="pb-10">
              <h1 className="text-4xl text-balance font-bold pb-10">
                ¿Quién soy?
              </h1>
              <div className="text-pretty text-left lg:text-lg text-base space-y-2">
                <p>
                  Soy Emanuel Nicolás Herrador, un joven entusiasta que{" "}
                  <strong>ama</strong> la programación, los algoritmos, la
                  tecnología y la informática en general.
                </p>
                <p>
                  Desde chico me interesé por la <i>Matemática</i> y su relación
                  con las demás ciencias, y gracias al destino (y a mi hermana),
                  me topé con este maravilloso mundo. Inicié mis acercamientos
                  con la programación de la forma más <i>sutil</i> que conozco
                  para aprender (sin rodeos y con lo más complejo primero), con
                  la Olimpíada Informática Argentina. Así es, no conocía nada de
                  programación pero me metí a la olimpíada para aprender. Y vaya
                  que aprendí.
                </p>
                <p>
                  Desde ese entonces, la programación me atrapó y lo tuve muy
                  claro, había encontrado mi vocación.
                </p>
                <p>
                  Me encanta aprender cosas nuevas, y me apasiona enseñar y
                  compartir lo que sé. Me gusta ayudar a los demás y siempre
                  estoy dispuesto a aprender de los demás. El conocimiento es la
                  herramienta más poderosa que tenemos, y es por eso que debemos
                  compartirlo y apoyarnos mutuamente para crecer.
                </p>
              </div>
            </section>

            {/* Education */}

            {/* Skills, languages and technologies */}

            {/* Laboral experience */}

            {/* Cool projects */}
          </div>
        </div>
      </div>
    </>
  );
}
