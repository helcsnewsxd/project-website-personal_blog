import GitHub from "@/components/footer/icons/github";
import Gmail from "@/components/footer/icons/gmail";
import Instagram from "@/components/footer/icons/instagram";
import Twitter from "@/components/footer/icons/twitter";
import Linkedin from "@/components/footer/icons/linkedin";
import Telegram from "@/components/footer/icons/telegram";

export default function Footer() {
  return (
    <footer className="footer footer-center p-8 gap-5 bg-primary text-base-100/70 font-semibold">
      <nav>
        <div className="grid grid-flow-col gap-4">
          <GitHub />
          <Gmail />
          <Instagram />
          <Twitter />
          <Linkedin />
          <Telegram />
        </div>
      </nav>
      <aside>
        <p className="text-pretty">
          Copyright © 2023 - Todos los derechos reservados por Emanuel Nicolás
          Herrador
        </p>
      </aside>
    </footer>
  );
}
