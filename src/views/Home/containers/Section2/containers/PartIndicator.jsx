import { motion } from "framer-motion";

export default function PartIndicator({ activePart, t }) {
  return (
    <div className="absolute z-10 w-[130px] h-full top-0 left-4 right-auto md:left-auto md:right-8 flex flex-col justify-center items-center space-y-4">
      {[
        t("home.section2.s1"),
        t("home.section2.s2"),
        t("home.section2.s3"),
      ].map((title, index) => (
        <div
          key={`Indicator-${index}`}
          className="relative flex items-center w-full h-14"
        >
          {activePart === index && (
            <motion.div
              className="w-0.5 flex-none h-full rounded-full bg-text z-10"
              layoutId="partIndicator"
            />
          )}
          <div className="w-0.5 flex-none h-full rounded-full bg-neutral-200 top-0 left-0 absolute" />
          <motion.span
            className="absolute flex-grow left-3"
            style={{
              color: activePart === index ? "rgb(var(--text))" : "#E5E5E5",
              transition: "color 0.3s ease-in-out",
            }}
          >
            {title}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
