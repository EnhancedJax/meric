import Contact from "./containers/Contact";
import Hero from "./containers/Hero";
import Section1 from "./containers/Section1";
import Section2 from "./containers/Section2";
import Section3 from "./containers/Section3";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section1 />
      <Section2 />
      <Section3 />
      <Contact />
    </>
  );
}
