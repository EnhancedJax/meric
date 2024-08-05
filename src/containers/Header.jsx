import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();

  return (
    <header className="bg-white py-6 px-24 h-[89px]">
      <nav className="mx-auto flex justify-between items-center">
        <a href="/" className="h-full flex items-center gap-2">
          <img src="logo.png" alt="logo" className="h-10" />
          <img src="logo_text.png" alt="logo" className="h-3" />
        </a>
        <div className="flex items-center gap-[30px]">
          <ul className="flex items-center gap-5">
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
          <button className="px-10 py-2.5 bg-secondary rounded-tl-[35px] rounded-br-[35px] flex items-center">
            <span className="text-white  font-bold">
              {t("header.letsTalk")}
            </span>
          </button>
          <button className="p-2.5 rounded-tl-[35px] rounded-tr-[35px] rounded-br-[35px] border-2 border-[#282b50] flex items-center">
            <Languages />
          </button>
        </div>
      </nav>
    </header>
  );
}
