import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full px-6 text-xs text-white bg-black md:text-sm section">
      <div className="flex items-center justify-start py-4 clampcontainer">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        {/* <a href="/privacy-policy">{t("footer.privacyPolicy")}</a> */}
      </div>
    </footer>
  );
}
