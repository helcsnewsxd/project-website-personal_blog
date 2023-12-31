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
          <h1 className="mb-5 text-5xl font-bold text-balance">Welcome!</h1>
          <p className="mb-5 text-pretty">
            On this site you can find invaluable content on competitive
            programming and cybersecurity, theory, tips, tricks, solutions and
            much more!
          </p>
          <p className="mb-5 text-pretty text-lg italic">
            What are you waiting for, let's go!
          </p>
        </div>
      </div>
    </div>
  );
}
