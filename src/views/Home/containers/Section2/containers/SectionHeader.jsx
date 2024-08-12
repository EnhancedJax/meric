import H1 from "../../../../../components/H1";
import MP from "../../../../../components/MP";

export default function SectionHeader({ t }) {
  return (
    <div className="px-6 py-12 lg:px-0">
      <div className="mb-6 w-fit lg:w-full lg:mb-0">
        <H1 text={t("home.section2.h1")} />
      </div>
      <MP className="text-2xl lg:hidden">{t("home.section2.p")}</MP>
    </div>
  );
}
