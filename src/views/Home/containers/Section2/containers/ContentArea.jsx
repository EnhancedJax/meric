import { motion, useInView } from "framer-motion";
import MP from "../../../../../components/MP";
import { SERVICES_IMAGES, TEST_ICONS } from "../../../../../constants";
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
  const inView = useInView(content3Ref);
  return (
    <div
      ref={contentRef}
      className="relative w-2/3 pr-6 md:pr-0 md:pt-4 left-1/3 md:left-[37%] md:w-[40%]"
    >
      <MP className="absolute top-0 hidden text-3xl md:block">
        {t("home.section2.p")}
      </MP>
      <Spacer
        isVisible={isMd}
        height={`calc(50vh - ${
          content1Ref?.current?.offsetHeight / 2 || 0
        }px - 32px)`}
      />
      {[0, 1, 2].map((i, index) => (
        <div key={`Section2-content-${i}`}>
          {!isMd && (
            <div className="relative w-full h-[35vh] mb-12">
              <AnimatedImageGroup
                activePart={activePart}
                index={i}
                noDelay
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
            <h2 className="mb-6 -ml-10 text-4xl md:ml-0">
              {t(`home.section2.s${i + 1}title`)}
            </h2>
            <MP className="text-lg">{t(`home.section2.s${i + 1}p`)}</MP>
            {i == 2 && (
              <div className="flex flex-wrap gap-2 mt-8">
                {TEST_ICONS.map((Icon, index) => (
                  <motion.span
                    key={`Section2-Part3-test-${index}`}
                    className="flex items-center gap-3 px-6 py-1.5 text-sm text-white rounded-full bg-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      inView
                        ? {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5, delay: index * 0.1 },
                          }
                        : {}
                    }
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon size={20} />
                    {t(`home.section2.t${index}`)}
                  </motion.span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
      <Spacer height="80vh" />
    </div>
  );
}
