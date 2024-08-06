import Marquee from "react-fast-marquee";
import H1 from "../../../../components/H1";

export default function Section1() {
  return (
    <section className="w-full pb-24">
      <section className="container py-12 opacity-40">
        <p className="w-full mb-3 text-sm text-center">Trusted by</p>
        <Marquee autoFill gradient className="h-12">
          <img src="brands/disney.png" className="h-12 mr-12" />
        </Marquee>
      </section>
      <section className="w-full py-24">
        <div className="container flex gap-16">
          <div className="flex-none">
            <H1>About Us</H1>
          </div>
          <p className="text-5xl">
            <span>
              We are a footwear design and sourcing agency that has been
              established for 24+ years.
            </span>
            <br />
            <br />
            <span className="opacity-50">
              Over the years, our agency has worked on hundred of projects and
              had become a trusted ally of numerous B2B clients.
            </span>
          </p>
        </div>
      </section>
      <section
        className="w-full py-16 text-white"
        style={{ backgroundImage: "url(section1_bg.jpg)" }}
      >
        <div className="container flex justify-center gap-20">
          <div className="flex flex-col gap-5">
            <span className="font-bold text-8xl">200+</span>
            <span className="text-lg font-light">Satisfied Clients</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold text-8xl">30+</span>
            <span className="text-lg font-light">Partners</span>
          </div>
          <div className="flex flex-col gap-5">
            <span className="font-bold text-8xl">{">"}24</span>
            <span className="text-lg font-light">Years of Experience</span>
          </div>
        </div>
      </section>
    </section>
  );
}
