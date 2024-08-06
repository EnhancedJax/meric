import { Inbox, Phone, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-hook-inview";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../../../tailwind.config";
import Accordion from "../../../../components/Accordion";
import { Cobe } from "../../../../components/Cobe";
import { CONTACTS, OFFICES } from "../../../../constants";
import { CobeContainer, MobileCobeContainer } from "./styles";

export default function Contact() {
  const [focusIndex, setFocusIndex] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const mdBreakpoint = parseInt(
        resolveConfig(tailwindConfig).theme.screens.md
      );
      setIsMd(window.innerWidth >= mdBreakpoint);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section
      className="flex pb-20 bg-cover bg-text md:h-[1200px] pt-24 md:pt-0 section"
      style={{
        backgroundImage: "url('ContactBackground.png')",
        backgroundPosition: "center",
      }}
      ref={ref}
    >
      <div className="container relative flex flex-col items-center justify-end gap-20 text-white">
        {isMd && (
          <CobeContainer>
            {inView && (
              <Cobe
                markers={OFFICES.map((office) => office.coordinates)}
                focusIndex={focusIndex}
              />
            )}
          </CobeContainer>
        )}
        <div className="md:w-[630px] text-center z-10">
          <h1 className="text-5xl font-bold md:text-6xl">
            Let's work together
          </h1>
          <div>Tell us some information and we’ll get back to you soon!</div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-20 md:min-h-[500px] md:h-[500px] container">
          <div className="flex flex-col w-full md:w-[360px] gap-12 px-5 md:px-0">
            <div>
              <h3 className="text-2xl mb-2.5 font-medium">Contact us</h3>
              <p className="text-sm text-gray">
                Call us Mon-Fri from 8am to 5pm, or shoot us an email!
              </p>
            </div>
            {CONTACTS.map((contact) => (
              <div key={contact.area} className="gap-2.5 flex flex-col">
                <p className="text-sm">Clients operating in {contact.area}</p>
                <div className="flex gap-2.5">
                  <UserRound />
                  <p>
                    {contact.person} - {contact.role}
                  </p>
                </div>
                <div className="flex gap-2.5">
                  <Phone />
                  <p>{contact.phone}</p>
                </div>
                <div className="flex gap-2.5">
                  <Inbox />
                  <p>{contact.email}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col w-full md:w-[360px] gap-6 md:gap-12 bg-black rounded-xl border border-neutral-600 p-5 md:p-0 md:border-none md:bg-transparent">
            <div>
              <h3 className="text-2xl mb-2.5 font-medium">Visit us</h3>
              <p className="text-sm text-gray">
                Our showrooms and offices spread across the globe
              </p>
            </div>
            {!isMd && (
              <div className="flex justify-center">
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
