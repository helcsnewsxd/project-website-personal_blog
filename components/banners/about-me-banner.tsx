export default function AboutMeBanner() {
  const scrolltoHash = function (element_id: string) {
    const element = document.getElementById(element_id);
    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/assets/images/about-me-hero.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content mt-10 mb-10 animatecss animatecss-fadeIn">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-balance">
            ¿Quieres saber más sobre mí?
          </h1>
          <p className="mb-5 text-pretty">
            A lo largo de esta sección podrás descubrir más sobre mí, mi
            historia, logros y proyectos.
          </p>
          <div
            className="btn btn-primary hover:scale-105"
            onClick={() => scrolltoHash("content")}
          >
            ¡Vamos allá!
          </div>
        </div>
      </div>
    </div>
  );
}