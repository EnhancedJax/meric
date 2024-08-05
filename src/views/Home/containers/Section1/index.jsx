import Background from "./containers/Background";

export default function Section1() {
  return (
    <section className="w-screen h-[899px] border border-border justify-center items-center gap-2.5 inline-flex">
      <div className="h-full container py-50 flex-col justify-center items-center gap-12.5 inline-flex">
        <Background />
        <div className="flex-col justify-start items-end gap-12 flex">
          <div className="flex-col justify-start items-center gap-5 flex">
            <h1 className="self-stretch  text-8xl font-bold">
              We Craft
              <br />
              Exceptional Footwear
            </h1>
            <h3 className="self-stretch text-right  text-2xl  ">
              We are a professionals specializing in footwear design and
              sourcing.
            </h3>
          </div>
          <div className="justify-end items-center gap-[79px] inline-flex">
            <div className="p-2.5 justify-center items-center gap-[25px] flex">
              <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                <div className=" text-5xl font-bold ">200+</div>
                <div className="  font-light ">Satisfied clients</div>
              </div>
              <div className="w-px h-12 bg-black/20" />
              <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                <div className=" text-5xl font-bold ">30+</div>
                <div className="  font-light ">Partners</div>
              </div>
              <div className="w-px h-12 bg-black/20" />
              <div className="flex-col justify-center items-center gap-2.5 inline-flex">
                <div className=" text-5xl font-bold ">24+</div>
                <div className="  font-light ">Years of experience</div>
              </div>
            </div>
            <button className="px-10 py-5 bg-primary rounded-tl-[40px] rounded-br-[40px] shadow justify-center items-center gap-2.5 flex">
              <div className="text-white font-bold ">Get a quote</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
