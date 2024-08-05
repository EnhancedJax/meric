import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-secondary text-white">
      <div className="flex justify-between items-center container py-4">
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        <a href="/privacy-policy">{t("footer.privacyPolicy")}</a>
      </div>
    </footer>
  );
}
