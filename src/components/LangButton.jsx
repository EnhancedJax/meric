import { AnimatePresence, motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGS } from "../constants";

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
            className="flex items-center justify-center gap-2 pl-3 pr-4"
            variants={langSelectorContainer}
            initial="initial"
            animate="animate"
            exit="exit"
            key="lang-selector"
          >
            {LANGS.map((lang) => (
              <LangSelector lang={lang.lang} text={lang.label} />
            ))}
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
      aria-label={`Change language to ${lang}`}
      variants={langSelectorItem}
      onClick={() => {
        i18n.changeLanguage(lang);
        window.location.reload();
      }}
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
  expanded: { width: 55 + 35 * LANGS.length, height: 42 },
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
