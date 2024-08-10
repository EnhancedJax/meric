import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LANGS } from "../constants";

export default function MobileNav() {
  const { i18n, t } = useTranslation();
  const lenis = useLenis();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <motion.button
        className="fixed z-50 flex items-center justify-center p-2 font-bold text-white origin-center rounded-full shadow-xl right-10 bottom-10 backdrop-blur-md"
        whileTap={{ scale: 0.9, y: 10 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
        }}
      >
        <motion.div className="flex items-center justify-center p-5 font-bold text-white origin-center rounded-full shadow-sm bg-primary">
          {isOpen ? <X /> : <Menu />}
        </motion.div>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 z-40 w-full h-full backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.8)",
            }}
          >
            <div className="flex flex-col h-full p-10">
              <div className="flex items-center justify-between mb-8">
                <button
                  className="flex items-center h-10"
                  onClick={() => {
                    lenis.scrollTo("#hero");
                    setIsOpen(false);
                  }}
                >
                  <img src="logo.webp" alt="logo" className="h-full mr-4" />
                  <img src="logo_text.webp" alt="meric" className="w-32" />
                </button>
              </div>
              <div className="flex flex-col items-end justify-end flex-grow gap-8">
                <motion.div
                  className="flex items-end justify-end gap-4"
                  variants={{
                    open: {
                      transition: { staggerChildren: 0.05, delayChildren: 0.2 },
                    },
                    closed: {
                      transition: {
                        staggerChildren: 0.05,
                        staggerDirection: -1,
                      },
                    },
                  }}
                  initial="closed"
                  animate="open"
                  exit="closed"
                >
                  {LANGS.map((item, index) => (
                    <>
                      <motion.button
                        key={index}
                        onClick={() => {
                          i18n.changeLanguage(item.lang);
                          window.location.reload();
                        }}
                        variants={{
                          open: { opacity: 1, x: 0 },
                          closed: { opacity: 0, x: 20 },
                        }}
                        transition={{
                          y: { stiffness: 1000, velocity: -100 },
                        }}
                      >
                        {item.label}
                      </motion.button>
                      {index !== LANGS.length - 1 && (
                        <motion.span
                          variants={{
                            open: { opacity: 1, x: 0 },
                            closed: { opacity: 0, x: 20 },
                          }}
                          transition={{
                            y: { stiffness: 1000, velocity: -100 },
                          }}
                        >
                          |
                        </motion.span>
                      )}
                    </>
                  ))}
                </motion.div>
                <nav>
                  <motion.ul
                    className="flex flex-col items-end gap-4"
                    variants={{
                      open: {
                        transition: { staggerChildren: 0.07 },
                      },
                      closed: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                    }}
                    initial="closed"
                    animate="open"
                    exit="closed"
                  >
                    {[
                      { href: "#section-about", text: t("header.about") },
                      { href: "#section-services", text: t("header.services") },
                      { href: "#section-products", text: t("header.products") },
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        variants={{
                          open: {
                            y: 0,
                            scale: 1,
                            opacity: 1,
                          },
                          closed: {
                            y: 50,
                            scale: 0.9,
                            opacity: 0,
                          },
                        }}
                      >
                        <a
                          href={item.href}
                          onClick={() => {
                            setIsOpen(false);
                            lenis.scrollTo(item.href);
                          }}
                        >
                          {item.text}
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </nav>
              </div>
              <div className="flex items-center justify-end h-20 mt-10 mr-28">
                <motion.a
                  href="#section-contact"
                  onClick={() => {
                    setIsOpen(false);
                    lenis.scrollTo("#section-contact");
                  }}
                  className="py-3 px-10 text-center font-bold text-white bg-secondary rounded-tl-[35px] rounded-br-[35px]"
                  whileTap={{ scale: 0.9, y: 10 }}
                  initial={{ scale: 0, x: 100 }}
                  animate={{ scale: 1, x: 0 }}
                  exit={{ scale: 0, x: 100 }}
                >
                  {t("header.letsTalk")}
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
