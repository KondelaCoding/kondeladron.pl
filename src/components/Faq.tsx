import Image from "next/image";
import FaqImg from "../img/about-desktop.png";

const Faq = () => {
  return (
    <div id="faq">
      <div className="h-20 w-full"></div>
      <div className="grid px-5 max-w-[1200px] mx-auto gap-20 xl:grid-cols-2">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-center text-4xl tracking-tighter mb-10 xl:text-left">Często zadawane pytania</h2>
          <ul className="flex flex-col gap-10">
            <li className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">Jak zacząć?</h2>
              <p className="text-[color:var(--lightgray-color)]">
                W celu rozpoczęcia współpracy prosimy o kontakt mailowy lub telefoniczny. Po omówieniu szczegółów
                projektu ustalamy termin realizacji.
              </p>
            </li>
            <hr className="border-[var(--gray-color)]" />
            <li className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">Ile kosztuje usługa?</h2>
              <p className="text-[color:var(--lightgray-color)]">
                Koszt usługi zależy od skali projektu. W celu uzyskania wyceny prosimy o kontakt mailowy lub
                telefoniczny.
              </p>
            </li>
            <hr className="border-[var(--gray-color)]" />
            <li className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tighter">Jakie są terminy realizacji?</h2>
              <p className="text-[color:var(--lightgray-color)]">
                Wycenę oraz terminy realizacji ustalamy indywidualnie z każdym klientem. Wszystko zależy od skali.
              </p>
            </li>
          </ul>
        </div>
        <div className="hidden h-full justify-center items-center xl:flex">
          <Image
            src={FaqImg}
            alt="about-desktop"
            width={600}
            height={400}
            className="max-w-full h-auto object-contain drop-shadow-[10px_10px_20px_rgba(0,0,0,0.3)]"
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
