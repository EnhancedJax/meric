import { SERVICES_IMAGES } from "../../../../../constants";
import { AnimatedImageGroup } from "./AnimatedImages";
import Spacer from "./Spacer";

export default function ContentArea({
  contentRef,
  content1Ref,
  content2Ref,
  content3Ref,
  activePart,
  isMd,
  t,
}) {
  return (
    <div
      ref={contentRef}
      className="relative md:pt-4 left-1/3 md:left-[348px] lg:left-[572px] w-2/3 md:w-2/5"
    >
      <p className="absolute top-0 hidden text-5xl md:block">
        {t("home.section2.p")}
      </p>
      <Spacer
        isVisible={isMd}
        height={`calc(50vh - ${
          content1Ref?.current?.offsetHeight / 2 || 0
        }px - 32px)`}
      />
      {[0, 1, 2].map((i, index) => (
        <div key={`Section2-content-${i}`}>
          {!isMd && (
            <div className="relative w-full h-[40vh] bg-text-5 mb-12">
              <AnimatedImageGroup
                activePart={activePart}
                index={i}
                item={SERVICES_IMAGES[i]}
              />
            </div>
          )}
          <div
            ref={
              i === 0 ? content1Ref : index === 1 ? content2Ref : content3Ref
            }
            className={`text-text ${
              index !== 2 ? "mb-[150px] md:mb-[300px]" : ""
            } w-full`}
          >
            <h2 className="mb-6 text-4xl font-bold">
              {t(`home.section2.s${i + 1}title`)}
            </h2>
            <p className="">{t(`home.section2.s${i + 1}p`)}</p>
          </div>
        </div>
      ))}
      <Spacer height="80vh" />
    </div>
  );
}
