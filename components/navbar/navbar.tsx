import ThemeController from "./theme-controller";
import Image from "next/image";
import Link from "next/link";

const BellaLogo = () => (
  <Link href="/">
    <Image
      src="/assets/images/bella.svg"
      alt="bella"
      priority={true}
      width={50}
      height={50}
      className="hover:scale-105"
    />
  </Link>
);

const MenuContentMobile = () => (
  <label
    htmlFor="my-drawer"
    tabIndex={0}
    role="button"
    className="btn btn-ghost lg:hidden"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h8m-8 6h16"
      />
    </svg>
  </label>
);

const CenterContentDesktop = () => (
  <ul className="menu menu-horizontal bg-base-200 rounded-box">
    <li>
      <Link href="/">Principal</Link>
    </li>
    <li>
      <Link href="/blog">Blog</Link>
    </li>
    <li>
      <Link href="/about">Sobre mí</Link>
    </li>
  </ul>
);

const ContactButton = () => (
  <Link href="/contact">
    <button className="btn btn-primary rounded-3xl hover:scale-105">
      Contacto
    </button>
  </Link>
);

export default function Navbar() {
  return (
    <div className="navbar fixed bg-base-100 shadow-2xl p-3 z-[1000]">
      <div className="navbar-start">
        <div className="hidden lg:flex">
          <BellaLogo />
        </div>
        <div className="flex lg:hidden">
          <MenuContentMobile />
        </div>
      </div>
      <div className="navbar-center">
        <div className="hidden lg:flex">
          <CenterContentDesktop />
        </div>
        <div className="flex lg:hidden">
          <ContactButton />
        </div>
      </div>
      <div className="navbar-end">
        <ThemeController />
        <div className="hidden lg:flex ml-4">
          <ContactButton />
        </div>
        <div className="flex lg:hidden ml-4">
          <BellaLogo />
        </div>
      </div>
    </div>
  );
}
