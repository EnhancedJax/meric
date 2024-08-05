import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import LangButton from "../components/LangButton";

export default function Header() {
  const { t } = useTranslation();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

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
      className={`w-full bg-white py-6 px-24 h-[89px] ${
        visible ? "fixed" : "hidden"
      }`}
    >
      <nav className="relative flex items-center justify-between w-full mx-auto">
        <a
          href="/"
          className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"
        >
          <img src="logo.png" alt="logo" className="h-10" />
        </a>
        <ul className="flex items-center gap-5 text-sm">
          <a href="#">
            <li className="">{t("header.about")}</li>
          </a>
          <a href="#">
            <li className="">{t("header.services")}</li>
          </a>
          <a href="#">
            <li className="">{t("header.production")}</li>
          </a>
          <a href="#">
            <li className="">{t("header.clients")}</li>
          </a>
        </ul>
        <div className="flex gap-5">
          <Button>{t("header.letsTalk")}</Button>
          <LangButton />
        </div>
      </nav>
    </header>
  );
}
