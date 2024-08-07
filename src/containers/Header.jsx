import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import LangButton from "../components/LangButton";

export default function Header() {
  const { t } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const lenis = useLenis();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`w-full bg-white py-3 px-24 z-50 fixed transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="relative flex items-center justify-between w-full mx-auto">
        <button
          onClick={() => {
            lenis.scrollTo("#hero");
          }}
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
          <img src="logo.png" alt="logo" className="h-10" />
        </button>
        <ul className="flex items-center gap-5 text-sm text-text">
          <a
            href="#section-about"
            onClick={() => {
              lenis.scrollTo("#section-about");
            }}
          >
            <li className="">{t("header.about")}</li>
          </a>
          <a
            href="#section-services"
            onClick={() => {
              lenis.scrollTo("#section-services");
            }}
          >
            <li className="">{t("header.services")}</li>
          </a>
          <a
            href="#section-products"
            onClick={() => {
              lenis.scrollTo("#section-products");
            }}
          >
            <li className="">{t("header.products")}</li>
          </a>
        </ul>
        <div className="flex gap-5">
          <a
            href="#section-contact"
            onClick={() => {
              lenis.scrollTo("#section-contact");
            }}
            className="px-10 bg-secondary rounded-tl-[35px] rounded-br-[35px] flex items-center"
          >
            <span className="font-bold text-white">
              {" "}
              {t("header.letsTalk")}
            </span>
          </a>
          <LangButton />
        </div>
      </nav>
    </header>
  );
}
