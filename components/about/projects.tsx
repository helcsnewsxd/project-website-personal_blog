import Image from "next/image";

export default function CoolProjects() {
  return (
    <section className="pb-10">
      <h1 className="text-4xl text-balance font-bold pb-10">
        Proyectos destacados
      </h1>
      <div className="grid grid-flow-row lg:grid-cols-3 grid-cols-1">
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
              <Image
                src="/assets/images/projects/website.png"
                alt="Website"
                width={400}
                height={300}
                priority={true}
              />
            </figure>
          </div>
        </a>
      </div>
    </section>
  );
}
