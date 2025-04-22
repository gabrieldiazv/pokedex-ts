import { useEffect, useState } from "react";
import logo from "../assets/pokemon-logo.svg";
import pokeball from "../assets/pokeball.png";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 bg-gradient-to-r from-red-600 to-yellow-500 shadow-md border-b-4 border-yellow-400 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 transition-all duration-300 ">
        <img
          src={pokeball}
          alt="Left Pokeball"
          className={`h-8 sm:h-10 md:h-12 transition-all duration-300 animate-spin-slow animate-spin-slow ${
            scrolled ? "h-6 sm:h-8 md:h-10" : ""
          } `}
        />

        <img
          src={logo}
          alt="Pokemon Logo"
          className={`object-contain drop-shadow-md transition-all duration-300  ${
            mounted ? "animate-fade-in" : ""
          } ${scrolled ? "h-10 sm:h-14 md:h-16" : "h-14 sm:h-20 md:h-24"}`}
        />

        <img
          src={pokeball}
          alt="Right Pokeball"
          className={`h-8 sm:h-10 md:h-12 transition-all duration-300 animate-spin-slow ${
            scrolled ? "h-6 sm:h-8 md:h-10" : ""
          }`}
        />
      </div>
    </header>
  );
};

export default Header;
