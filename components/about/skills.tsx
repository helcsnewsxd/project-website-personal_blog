function PieChart() {
  return (
    <svg
      height={200}
      width={200}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 387.661 387.661"
      xmlSpace="preserve"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          style={{ fill: "currentColor" }}
          d="M175.356,8.061c-90.4,4.4-163.2,76.8-167.2,167.2c-0.4,4.4,3.2,8.4,8,8.4h159.6c4.4,0,8-3.6,8-8 v-159.6C183.756,11.261,179.756,7.661,175.356,8.061z"
        ></path>
        <path
          style={{ fill: "currentColor", opacity: "0.3" }}
          d="M175.756,191.661h-159.6c-4.4,0-8.8-2-12-5.2c-2.8-3.2-4.4-7.6-4-12c4-94.8,79.2-169.6,174.8-174.4 c4.4-0.4,8.4,1.2,11.6,4c3.2,3.2,5.2,7.2,5.2,12v159.6C191.756,184.461,184.556,191.661,175.756,191.661z M175.756,16.061 L175.756,16.061c-87.2,4.4-155.6,72.8-159.6,159.6h159.6V16.061L175.756,16.061z M175.356,8.061L175.356,8.061L175.356,8.061z"
        ></path>
        <path
          style={{ fill: "currentColor", opacity: "0.5" }}
          d="M215.756,46.061v153.6c0,8.8-7.2,16-16,16h-153.6c-10,0-17.6,8.8-16,18.8 c15.2,85.2,91.6,149.2,182,145.2c90-4.4,163.2-77.6,167.2-167.2c4.4-90.4-60-166.8-145.2-181.6 C224.556,28.861,215.756,36.461,215.756,46.061z"
        ></path>
        <path
          style={{ fill: "currentColor", opacity: "0.3" }}
          d="M204.156,387.661c-88.8,0-166.4-64-182-152c-1.2-7.2,0.8-14.4,5.6-19.6c4.4-5.2,11.2-8.4,18.4-8.4 h153.6c4.4,0,8-3.6,8-8v-153.6c0-7.2,3.2-13.6,8.8-18.4c5.6-4.4,12.4-6,19.2-4.8c90.8,15.6,156,97.2,151.6,190 c-4,93.6-80.8,170.4-174.8,174.8C209.756,387.661,206.956,387.661,204.156,387.661z M46.156,223.661c-2.4,0-4.8,1.2-6.4,2.8 c-1.6,2-2.4,4.4-2,6.8c15.2,82.4,90,142,174,138.4c85.6-4,155.6-74.4,159.6-159.6c4-84.4-55.6-158.8-138.4-173.2 c-3.2-0.8-5.2,0.8-6,1.6c-2,1.2-3.2,3.2-3.2,5.6v153.6c0,13.2-10.8,24-24,24H46.156z"
        ></path>
      </g>
    </svg>
  );
}

export default function Skills() {
  return (
    <section className="pb-10 grid grid-flow-row grid-cols-1 space-x-5">
      <div>
        <h1 className="text-4xl text-balance font-bold pb-10">Habilidades</h1>
        <div className="lg:grid lg:grid-flow-row lg:grid-cols-3 text-pretty text-left text-lg space-x-4 hidden">
          <div className="flex flex-row justify-end">
            <div>
              <h2 className="text-2xl text-balance italic pb-5">
                Ciberseguridad
              </h2>
              <ul className="ml-2">
                <li>Criptografía</li>
                <li>Ingeniería reversa</li>
                <li>OSINT</li>
                <li>Trabajo en equipo</li>
                <li>Comunicación efectiva</li>
              </ul>
            </div>
          </div>
          <div className="max-w-md flex flex-row justify-center">
            <PieChart />
          </div>
          <div className="flex flex-row justify-start">
            <div>
              <h2 className="text-2xl text-balance italic pb-5">
                Programación Competitiva
              </h2>
              <ul className="ml-2">
                <li>Algoritmos</li>
                <li>Estructura de datos</li>
                <li>Optimizatión</li>
                <li>Resolución de problemas</li>
                <li>Matemática</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:hidden text-pretty text-left text-base space-y-4">
          <div>
            <div>
              <h2 className="text-2xl text-balance italic pb-5">
                Ciberseguridad
              </h2>
              <ul className="ml-2">
                <li>Criptografía</li>
                <li>Ingeniería reversa</li>
                <li>OSINT</li>
                <li>Trabajo en equipo</li>
                <li>Comunicación efectiva</li>
              </ul>
            </div>
          </div>
          <div>
            <div>
              <h2 className="text-2xl text-balance italic pb-5">
                Programación Competitiva
              </h2>
              <ul className="ml-2">
                <li>Algoritmos</li>
                <li>Estructura de datos</li>
                <li>Optimizatión</li>
                <li>Resolución de problemas</li>
                <li>Matemática</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
