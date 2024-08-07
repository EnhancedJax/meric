import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function LangButton() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.button
      className="p-2 rounded-tl-[35px] rounded-tr-[35px] rounded-br-[35px] border-2 border-text text-text flex items-center overflow-hidden cursor-none"
      onClick={() => setExpanded(!expanded)}
      variants={container}
      initial="initial"
      data-cursor-icon={expanded ? "Minimize" : "Maximize"}
      animate={expanded ? "expanded" : "initial"}
    >
      <AnimatePresence mode="popLayout">
        {!expanded ? (
          <motion.div
            variants={slide}
            initial="initial"
            animate="animate"
            exit="exit"
            key="lang-icon"
          >
            <Languages size={20} />
          </motion.div>
        ) : (
          <motion.div
            className="flex items-center justify-center gap-2 pl-3"
            variants={langSelectorContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            key="lang-selector"
          >
            <LangSelector lang="en-US" text="EN" />
            <LangSelector lang="zh-HK" text="繁" />
            <LangSelector lang="zh-CN" text="中" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function LangSelector({ lang, text }) {
  const { i18n } = useTranslation();
  return (
    <motion.button
      variants={langSelectorItem}
      onClick={() => i18n.changeLanguage(lang)}
      className={`flex items-center justify-center w-8 h-8 text-sm rounded-full ${
        i18n.language === lang ? "bg-text text-white" : "bg-white text-text"
      }`}
      data-cursor-icon="Check"
    >
      {text}
    </motion.button>
  );
}

const container = {
  initial: { width: 42, height: 42 },
  expanded: { width: 160, height: 42 },
};

const slide = {
  initial: { y: 42 },
  animate: { y: 0 },
  exit: { y: -42 },
};

const langSelectorContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  exit: {},
};

const langSelectorItem = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: { opacity: 0, y: -20 },
};
