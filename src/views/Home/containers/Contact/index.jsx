import { Inbox, Phone, UserRound } from "lucide-react";
import { useState } from "react";
import { useInView } from "react-hook-inview";
import { useTranslation } from "react-i18next";
import Accordion from "../../../../components/Accordion";
import { Cobe } from "../../../../components/Cobe";
import VerticalMarquee from "../../../../components/VerticalMarquee";
import { CONTACTS, OFFICES } from "../../../../constants";
import { useTailwindBreakpoint } from "../../../../hooks/useTailwindBreakpoint";
import Background from "./containers/Background";
import { CobeContainer, MobileCobeContainer } from "./styles";

export default function Contact() {
  const { t } = useTranslation();
  const [focusIndex, setFocusIndex] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.1 });
  const isMd = useTailwindBreakpoint("md");

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section
      id="section-contact"
      className="flex pb-20 bg-cover bg-text md:h-[1200px] pt-24 md:pt-0 w-full px-6 md:px-12 relative"
      style={{
        backgroundImage: "url('contact_bg.webp')",
        backgroundPosition: "center",
      }}
      ref={ref}
    >
      <div className="absolute top-0 left-0 flex w-full h-full md:items-center">
        <VerticalMarquee
          className="w-full overflow-hidden h-1/2 md:h-1/2"
          speed="15"
          style={{
            maskImage: isMd
              ? "radial-gradient(at center, white 10%, transparent 80%)"
              : "linear-gradient(to top, transparent, white)",
          }}
        >
          <Background className="w-full h-full" />
        </VerticalMarquee>
      </div>
      <div className="relative flex flex-col items-center justify-end gap-20 text-white clampcontainer">
        {isMd && (
          <CobeContainer data-cursor-icon="Grab">
            {inView && (
              <Cobe
                markers={OFFICES.map((office) => office.coordinates)}
                focusIndex={focusIndex}
              />
            )}
          </CobeContainer>
        )}
        <div className="md:w-[630px] text-center z-10 w-full ">
          <h1 className="text-4xl font-bold break-words sm:text-5xl md:text-6xl">
            {t("home.contact.h1")}
          </h1>
          <p className="mt-4 text-lg">{t("home.contact.p")}</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-20 md:min-h-[500px] md:h-[500px] clampcontainer">
          <div className="flex flex-col w-full gap-12 px-5 md:px-0">
            <div>
              <h3 className="text-2xl mb-2.5 font-medium">
                {t("home.contact.contactUs")}
              </h3>
              <p className="text text-gray">{t("home.contact.contactUsP")}</p>
            </div>
            {CONTACTS.map((contact) => (
              <div key={contact.area} className="gap-2.5 flex flex-col">
                <p className="text-sm">
                  {t("home.contact.clientsOperatingIn")}{" "}
                  {t(`home.contact.${contact.area}`)}
                </p>
                <div className="flex gap-2.5">
                  <UserRound />
                  <p
                    data-cursor-icon="Copy"
                    className="cursor-none"
                    onClick={() => handleCopy(contact.person)}
                  >
                    {contact.person} - {t(`home.contact.${contact.role}`)}
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <Phone />
                  <p
                    data-cursor-icon="Copy"
                    className="cursor-none"
                    onClick={() => handleCopy(contact.phone)}
                  >
                    {contact.phone}
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <Inbox />
                  <p
                    data-cursor-icon="Copy"
                    className="cursor-none"
                    onClick={() => handleCopy(contact.email)}
                  >
                    {contact.email}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full gap-6 p-5 bg-black border md:gap-12 rounded-xl border-neutral-600 md:p-0 md:border-none md:bg-transparent">
            <div>
              <h3 className="text-2xl mb-2.5 font-medium">
                {t("home.contact.visitUs")}
              </h3>
              <p className=" text-gray">{t("home.contact.visitUsP")}</p>
            </div>
            {!isMd && (
              <div className="flex justify-center w-full">
                <MobileCobeContainer>
                  {inView && (
                    <Cobe
                      markers={OFFICES.map((office) => office.coordinates)}
                      focusIndex={focusIndex}
                    />
                  )}
                </MobileCobeContainer>
              </div>
            )}
            <Accordion
              items={OFFICES.map((office, index) => ({
                title: office.name,
                content: office.address,
                onClick: () => setFocusIndex(index),
              }))}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
