import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contacto | HelcsnewsXD</title>
        <meta
          name="description"
          content="Contacto y Redes Sociales, Emanuel Nicolás Herrador (helcsnewsxd)"
        />
      </Head>

      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/assets/images/contact-hero.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content mt-10 mb-10 animatecss animatecss-fadeIn">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-balance">
              ¡Sígueme para estar atento a las novedades!
            </h1>
            <p className="mb-5">Puedes encontrarme en:</p>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-4">
              <a
                href="https://www.linkedin.com/in/emanuel-nicolas-herrador/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary hover:scale-105"
              >
                LinkedIn
              </a>

              <a
                href="https://www.github.com/helcsnewsxd"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary hover:scale-105"
              >
                GitHub
              </a>

              <a
                href="https://www.twitter.com/helcsnewsxd"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary hover:scale-105"
              >
                Twitter
              </a>

              <a
                href="https://www.instagram.com/helcsnewsxd"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary hover:scale-105"
              >
                Instagram
              </a>

              <a
                href="mailto:emanuelherrador2@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary hover:scale-105"
              >
                Email
              </a>

              <a
                href="https://t.me/helcsnewsxd"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary hover:scale-105"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
