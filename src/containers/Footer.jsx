import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="flex items-center text-xs text-white bg-black md:text-sm section">
      <div className="container flex items-center justify-between py-4">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        <a href="/privacy-policy">{t("footer.privacyPolicy")}</a>
      </div>
    </footer>
  );
}
