import Head from "next/head";
import Image from "next/image";

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

            {/* Most important awards */}
            <section className="pb-10">
              <h1 className="text-4xl text-balance font-bold pb-10">
                Reconocimientos
              </h1>
              <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-2">
                <div className="mb-2 mr-3">
                  <a
                    href="https://icpc.global/regionals/finder/SouthAmerica-South-2022/standings"
                    target="_blank"
                  >
                    <div className="border-solid border-primary rounded-xl border-2 p-3 hover:scale-105 hover:bg-primary/80 hover:text-base-200">
                      <p className="text-pretty lg:text-lg text-base">
                        46th ICPC World Finalist
                      </p>
                      <p className="text-pretty lg:text-md text-sm">
                        2024 - International Collegiate Programming Contest
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mb-2 mr-3">
                  <a
                    href="https://www.iberoinformatica.org/contestant_details/7174"
                    target="_blank"
                  >
                    <div className="border-solid border-primary rounded-xl border-2 p-3 hover:scale-105 hover:bg-primary/80 hover:text-base-200">
                      <p className="text-pretty lg:text-lg text-base">
                        Medalla de Bronce
                      </p>
                      <p className="text-pretty lg:text-md text-sm">
                        2021 - Ibero-American Olympiad in Informatics
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mb-2 mr-3">
                  <a
                    href="https://www.oia.unsam.edu.ar/oia-certamen-nacional-de-programacion-2020/"
                    target="_blank"
                  >
                    <div className="border-solid border-primary rounded-xl border-2 p-3 hover:scale-105 hover:bg-primary/80 hover:text-base-200">
                      <p className="text-pretty lg:text-lg text-base">
                        Medalla de Bronce
                      </p>
                      <p className="text-pretty lg:text-md text-sm">
                        2020 - Olimpíada Informática Argentina
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mb-2 mr-3">
                  <a
                    href="https://prensa.cba.gov.ar/educacion-3/con-14-medallas-asi-retornaron-estudiantes-cordobeses-de-la-olimpiada-de-matematica-en-chile/"
                    target="_blank"
                  >
                    <div className="border-solid border-primary rounded-xl border-2 p-3 hover:scale-105 hover:bg-primary/80 hover:text-base-200">
                      <p className="text-pretty lg:text-lg text-base">
                        Medalla de Oro
                      </p>
                      <p className="text-pretty lg:text-md text-sm">
                        2017 - Olimpíada Internacional de Matemática Atacalar
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mb-2 mr-3">
                  <a
                    href="https://www.facebook.com/ColegioMonserrat/posts/pfbid02ch9uTsFkwdp2c6JrpAx5QLMyUr7w3aSDsEy3PFsENj92ftkcEShvjAiZcPdGNySyl"
                    target="_blank"
                  >
                    <div className="border-solid border-primary rounded-xl border-2 p-3 hover:scale-105 hover:bg-primary/80 hover:text-base-200">
                      <p className="text-pretty lg:text-lg text-base">
                        "Dr. Ignacio Duarte y Quirós"
                      </p>
                      <p className="text-pretty lg:text-md text-sm">
                        2021 - Colegio Nacional de Monserrat
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mb-2 mr-3">
                  <a
                    href="https://monserrat.unc.edu.ar/wp-content/blogs.dir/8/files/sites/8/gravity_forms/1-78b52efae091f851456cd09386bd37b8/03/2020/2020-075.pdf"
                    target="_blank"
                  >
                    <div className="border-solid border-primary rounded-xl border-2 p-3 hover:scale-105 hover:bg-primary/80 hover:text-base-200">
                      <p className="text-pretty lg:text-lg text-base">
                        Abanderado de la bandera nacional
                      </p>
                      <p className="text-pretty lg:text-md text-sm">
                        2020 - Colegio Nacional de Monserrat
                      </p>
                    </div>
                  </a>
                </div>
                <div className="mb-2 mr-3">
                  <a
                    href="https://monserrat.unc.edu.ar/files/gravity_forms/1-413047a15a4611794df68bd47c55c319/05/2019/2019-243.pdf"
                    target="_blank"
                  >
                    <div className="border-solid border-primary rounded-xl border-2 p-3 hover:scale-105 hover:bg-primary/80 hover:text-base-200">
                      <p className="text-pretty lg:text-lg text-base">
                        2do escolta de la bandera nacional
                      </p>
                      <p className="text-pretty lg:text-md text-sm">
                        2019 - Colegio Nacional de Monserrat
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* Skills, languages and technologies */}
            <section className="pb-10 grid grid-flow-row grid-cols-2 space-x-5">
              <div>
                <h1 className="text-4xl text-balance font-bold pb-10">
                  Habilidades
                </h1>
                <div className="text-pretty text-left lg:text-lg text-base">
                  <ul className="list-disc list-inside">
                    <li>Resolución de problemas</li>
                    <li>
                      Conocimiento profundo en algoritmos y estructuras de datos
                    </li>
                    <li>Matemática avanzada</li>
                    <li>Optimización de código y de algoritmos</li>
                    <li>Debugging</li>
                    <li>Programación competitiva</li>
                    <li>Ingeniería reversa</li>
                    <li>Criptografía</li>
                    <li>Ciberseguridad</li>
                    <li>Innovación y creatividad</li>
                    <li>Trabajo en equipo</li>
                    <li>Comunicación efectiva</li>
                  </ul>
                </div>
              </div>
              <div>
                <h1 className="text-4xl text-balance font-bold pb-10">
                  Lenguajes y tecnologías
                </h1>
                <div className="grid grid-flow-row lg:grid-cols-5 grid-cols-3">
                  {[
                    "c++",
                    "c",
                    "python",
                    "assembly",
                    "system-verilog",
                    "java",
                    "haskell",
                    "javascript",
                    "html",
                    "css",
                    "react",
                    "nextjs",
                    "omnet++",
                    "mysql",
                    "mongodb",
                    "fastapi",
                    "ghidra",
                  ].map((tech, index) => (
                    <Image
                      key={index}
                      src={`/assets/images/tech-icons/${tech}.svg`}
                      alt={tech}
                      width={50}
                      height={50}
                      className="mr-5 mb-5"
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* Cool projects */}
            <section className="pb-10">
              <h1 className="text-4xl text-balance font-bold pb-10">
                Proyectos destacados
              </h1>
              <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-2">
                <a href="https://helcsnewsxd.vercel.app/" target="_blank">
                  <div className="card bg-base-100 shadow-xl mr-4 mb-4 hover:scale-105">
                    <div className="card-body">
                      <h2 className="card-title lg:text-2xl text-xl">
                        Sitio web personal
                      </h2>
                      <p className="lg:text-base text-md">
                        Blogs, portfolio y contacto
                      </p>
                      <p className="lg:text-base text-md">
                        Desarrollado con JavaScript, TypeScript y NextJS
                      </p>
                    </div>
                    <figure>
                      <img
                        src="/assets/images/projects/website.png"
                        alt="Website"
                      />
                    </figure>
                  </div>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
