import H1 from "../../../../../components/H1";
import MP from "../../../../../components/MP";

export default function SectionHeader({ t }) {
  return (
    <div className="px-6 py-12 md:px-0">
      <div className="mb-6 w-fit md:w-full md:mb-0">
        <H1 text={t("home.section2.h1")} />
      </div>
      <MP className="text-2xl md:hidden">{t("home.section2.p")}</MP>
    </div>
  );
}
