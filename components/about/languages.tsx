import Image from "next/image";
import { useState } from "react";

export default function LanguagesAndTechnologies() {
  const initialItems = [
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
  ];
  const [items, setItems] = useState(initialItems);

  const moveLeft = () => {
    setItems([items[items.length - 1], ...items.slice(0, items.length - 1)]);
  };

  const moveRight = () => {
    setItems([...items.slice(1), items[0]]);
  };

  return (
    <section className="pb-10 grid grid-flow-row grid-cols-1 space-x-5">
      <div>
        <h1 className="text-4xl text-balance font-bold pb-10">
          Lenguajes y tecnologías
        </h1>
        <div className="flex flex-row items-center">
          <button
            className="btn btn-circle bg-transparent hover:bg-transparent border-none shadow-none hover:scale-150"
            onClick={moveLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current rotate-180"
            >
              <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
            </svg>
          </button>
          <div className="overflow-hidden">
            <div className="flex flex-row lg:p-10 p-3 lg:space-x-8 space-x-4">
              {items.map((tech, index) => (
                <Image
                  key={index}
                  src={`/assets/images/tech-icons/${tech}.svg`}
                  alt={tech}
                  width={50}
                  height={50}
                />
              ))}
            </div>
          </div>
          <button
            className="btn btn-circle bg-transparent hover:bg-transparent border-none shadow-none hover:scale-150"
            onClick={moveRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
