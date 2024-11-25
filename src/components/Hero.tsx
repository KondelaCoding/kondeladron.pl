import Image from "next/image";
import Logo from "../img/logo.png";

const Hero = () => {
  return (
    <div className="w-screen h-screen  bg-cover flex justify-between flex-col items-center">
      <Image src={Logo} width={500} alt="logo-image" />
      <h1>Żyj z lotu ptaka</h1>
      <div className="w-full grid grid-cols-2 h-32 overflow-hidden"></div>
    </div>
  );
};

export default Hero;

// bg-[url('../img/hero.jpg')]
