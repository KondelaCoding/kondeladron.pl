import Image from "next/image";
import Background from "../img/bg-decoration.png";
import Link from "next/link";
import Logo from "../img/logo.png";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <footer className="relative pb-2">
      <Image src={Background} alt="background-decoration" className="hidden absolute -left-5 bottom-0 lg:block" />
      <div className="flex justify-center max-w-[1200px] mx-auto xl:justify-between">
        <div className="flex flex-col justify-center gap-10 items-center w-full px-5 xl:items-start xl:flex-row xl:justify-between">
          <Image src={Logo} alt="logo" width={400} className="xl:hidden" />
          <div className="gap-10 flex flex-col">
            <h2 className="hidden text-left text-4xl tracking-tighter xl:inline">
              Twój świat <br /> z innej <br /> <span className="text-[color:var(--primary-color)]">perspektywy</span>
            </h2>
            <div className="flex gap-5">
              <SocialIcon url="https://facebook.com" />
              <SocialIcon url="https://youtube.com" />
              <SocialIcon url="https://instagram.com" />
            </div>
          </div>
          <div className="flex gap-x-10 gap-y-3 text-xl flex-wrap justify-center text-nowrap xl:flex-col xl:text-[color:var(--lightgray-color)]">
            <h2 className="text-3xl tracking-tighter text-[color:var(--white-color)] mb-5 hidden xl:inline">
              Dowiedz się
            </h2>
            <Link href="#start" className="duration-200 hover:text-[color:var(--primary-color)]">
              Start
            </Link>
            <Link href="#about" className="duration-200 hover:text-[color:var(--primary-color)]">
              O nas
            </Link>
            <Link href="#work" className="duration-200 hover:text-[color:var(--primary-color)]">
              Prace
            </Link>
            <Link href="#faq" className="duration-200 hover:text-[color:var(--primary-color)]">
              Pytania
            </Link>
            <Link href="#contact" className="duration-200 hover:text-[color:var(--primary-color)]">
              Kontakt
            </Link>
          </div>
          <div className=" hidden gap-x-10 gap-y-3 text-xl flex-wrap justify-center text-nowrap xl:flex-col xl:text-[color:var(--lightgray-color)] xl:flex">
            <h2 className="text-3xl tracking-tighter text-[color:var(--white-color)] mb-5">Informacje kontaktowe</h2>
            <Link href="mailto:info@kondeladron.com" className="duration-200 hover:text-[color:var(--primary-color)]">
              info@kondeladron.com
            </Link>
            <Link href="tel:+123456789" className="duration-200 hover:text-[color:var(--primary-color)]">
              +123 456 789
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-5 text-[color:var(--lightgray-color)] w-full space-x-2 text-nowrap flex flex-wrap px-5">
        <p>&copy; {new Date().getFullYear()} KondelaDron.</p>
        <p>Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
};

export default Footer;
