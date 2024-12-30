"use client";
import { useState, useEffect } from "react";
import useInView from "../utils/useInView";
import Image from "next/image";
import Boat from "../img/boat.jpg";
import Bridge from "../img/bridge.jpg";
import AboutDesktop from "../img/about-desktop.png";
import Bgackground from "../img/bg-decoration.png";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  // custom fade in effect
  const [ref1, isInView1] = useInView();
  const [ref2, isInView2] = useInView();

  useEffect(() => {
    // Handle window resize to get the propper image
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Handle scroll for parallax effect
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };

    handleResize(); // Set initial width

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="about" className="relative">
      <div className="h-10 w-full"></div>
      <Image
        src={Bgackground}
        alt="background-decoration"
        className="hidden absolute top-1/2 right-0 -scale-x-100 -translate-y-1/2 mt-28 xl:block"
      />
      <div className="flex justify-center gap-20 mt-40 mx-auto xl:max-w-[1200px]">
        <div>
          <div
            ref={ref1}
            className={`px-5 transition-all duration-1000 transform ${
              isInView1 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-center text-4xl tracking-tighter xl:text-left">O nas</h2>
            <p className="text-[color:var(--lightgray-color)] text-center text-xl font-light mt-5 max-w-[700px] mx-auto xl:text-left">
              Jesteśmy pasjonatami filmowania dronem, oferując usługi profesjonalnego rejestrowania obrazu z powietrza.
              Specjalizujemy się w tworzeniu filmów, zdjęć, reklam, relacji z wydarzeń oraz inspekcji dla firm i osób
              prywatnych.
            </p>
          </div>
          {/* Parallax Image Section */}
          <div className="-mt-20 xl:hidden">
            <div className="relative bg-[var(--background)] h-52 -skew-y-6 -z-10 -mb-32 md:-mb-40"></div>
            <div className="relative w-full -z-20">
              <Image
                src={screenWidth > 768 ? Boat : Bridge}
                width={1920}
                height={1080}
                alt="boat-photo"
                className="w-full"
                style={{ transform: `translateY(${offsetY * 0.1}px)` }}
              />
            </div>
            <div className="relative bg-[var(--background)] h-52 -skew-y-6 -z-10 -mb-32"></div>
          </div>
          <div
            ref={ref2}
            className={`bg-[var(--background)] mt-10 px-5 transition-all duration-1000 transform xl:mt-20 ${
              isInView2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-center text-4xl tracking-tighter xl:text-left">Dlaczego my?</h2>
            <ul className="text-[color:var(--lightgray-color)] text-xl text-center font-light mt-5 space-y-10">
              <li className="drop-shadow-[5px_5px_20px_rgba(0,0,0,0.1)] space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-2xl mx-auto">
                <h3 className="font-bold text-2xl text-[var(--white-color)]">Profesjonalizm</h3>
                <p>Działamy zgodnie z obowiązującymi przepisami, posiadając odpowiednie licencje i ubezpieczenie.</p>
              </li>
              <li className="drop-shadow-[5px_5px_20px_rgba(0,0,0,0.1)] space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-2xl mx-auto">
                <h3 className="font-bold text-2xl text-[var(--white-color)]">Nowoczesny sprzęt</h3>
                <p>Korzystamy z najnowszych dronów, które zapewniają stabilność i najwyższą jakość obrazu.</p>
              </li>
              <li className="drop-shadow-[5px_5px_20px_rgba(0,0,0,0.1)] space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-2xl mx-auto">
                <h3 className="font-bold text-2xl text-[var(--white-color)]">Elastyczność</h3>
                <p>Dostosowujemy naszą ofertę do indywidualnych potrzeb każdego klienta.</p>
              </li>
              <li className="drop-shadow-[5px_5px_20px_rgba(0,0,0,0.1)] space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-2xl mx-auto">
                <h3 className="font-bold text-2xl text-[var(--white-color)]">Pasja i doświadczenie</h3>
                <p>Kochamy to, co robimy, a nasze doświadczenie przekłada się na doskonałe rezultaty.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden relative flex-grow-0 justify-center flex-col gap-20 items-start mt-10 xl:flex">
          <Image
            src={AboutDesktop}
            alt="about-desktop"
            width={600}
            height={400}
            className="max-w-full h-auto object-contain drop-shadow-[10px_10px_20px_rgba(0,0,0,0.3)]"
          />
          <Image
            src={AboutDesktop}
            alt="about-desktop"
            width={600}
            height={400}
            className="max-w-full h-auto object-contain drop-shadow-[10px_10px_20px_rgba(0,0,0,0.3)] -scale-x-100"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
