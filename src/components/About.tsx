"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Bridge from "../img/bridge.jpg";
import Boat from "../img/boat.jpg";

const About = () => {
  const [offsetY, setOffsetY] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleResize = () => {
    setScreenWidth(window.innerWidth);
    console.log(screenWidth);
  };

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    // Update screen width on resize
    window.addEventListener("resize", handleResize);

    // Update screen width on resize
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="mt-40">
      <div className="px-5">
        <h2 className="text-center text-4xl tracking-tighter">O nas</h2>
        <p className="text-[color:var(--lightgray-color)] text-center text-xl font-light mt-5 max-w-[700px] mx-auto">
          Jesteśmy pasjonatami filmowania dronem, oferując usługi profesjonalnego rejestrowania obrazu z powietrza.
          Specjalizujemy się w tworzeniu filmów, zdjęć, reklam, relacji z wydarzeń oraz inspekcji dla firm i osób
          prywatnych.
        </p>
      </div>
      <div className="-mt-20">
        <div className="relative bg-[var(--background)] h-52 -skew-y-6 -z-10 -mb-32 md:-mb-40"></div>
        <Image
          src={screenWidth > 768 ? Boat : Bridge}
          width={500}
          alt="boat-photo"
          className="relative w-full -z-20"
          style={{ transform: `translateY(${offsetY * 0.1}px)` }}
        />
        <div className="relative bg-[var(--background)] h-52 -skew-y-6 -z-10 -mb-32"></div>
      </div>
      <div className="bg-[var(--background)] mt-10 px-5">
        <h2 className="text-center text-4xl tracking-tighter">Dlaczego my?</h2>
        <ul className="text-[color:var(--lightgray-color)] text-xl text-center font-light mt-5 space-y-10">
          <li className="space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-96 mx-auto">
            <h3 className="font-bold text-2xl text-[var(--white-color)]">Profesjonalizm:</h3>
            <p>Działamy zgodnie z obowiązującymi przepisami, posiadając odpowiednie licencje i ubezpieczenie.</p>
          </li>
          <li className="space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-96 mx-auto">
            <h3 className="font-bold text-2xl text-[var(--white-color)]">Nowoczesny sprzęt:</h3>
            <p>Korzystamy z najnowszych dronów, które zapewniają stabilność i najwyższą jakość obrazu.</p>
          </li>
          <li className="space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-96 mx-auto">
            <h3 className="font-bold text-2xl text-[var(--white-color)]">Elastyczność:</h3>
            <p>Dostosowujemy naszą ofertę do indywidualnych potrzeb każdego klienta.</p>
          </li>
          <li className="space-y-2 backdrop-brightness-125 py-10 rounded-lg max-w-96 mx-auto">
            <h3 className="font-bold text-2xl text-[var(--white-color)]">Pasja i doświadczenie:</h3>
            <p>Kochamy to, co robimy, a nasze doświadczenie przekłada się na doskonałe rezultaty.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
