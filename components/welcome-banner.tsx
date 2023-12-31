export default function WelcomeBanner() {
  return (
    <div
      className="hero min-w-screen"
      style={{
        backgroundImage: "url(/assets/images/welcome-hero.avif)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content mt-10 mb-10">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-balance">Bienvenido!</h1>
          <p className="mb-5 text-pretty">
            En este sitio podrás encontrar contenido invaluable sobre
            programación competitiva y ciberseguridad: teoría, tips, trucos,
            soluciones y ¡mucho más!
          </p>
          <p className="mb-5 text-pretty text-lg italic">
            ¿Qué esperas?, ¡vamos allá!
          </p>
        </div>
      </div>
    </div>
  );
}
