import H1 from "../../../../../components/H1";

export default function SectionHeader({ t }) {
  return (
    <div className="px-6 py-12 md:px-0">
      <div className="mb-6 w-fit md:w-full md:mb-0">
        <H1>{t("home.section2.h1")}</H1>
      </div>
      <p className="text-3xl md:hidden">{t("home.section2.p")}</p>
    </div>
  );
}
