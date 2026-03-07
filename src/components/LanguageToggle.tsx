import { motion } from "framer-motion";
import { useLanguage } from "../contexts/LanguageContext";
import s from "./LanguageToggle.module.css";

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      className={s.toggle}
      onClick={toggleLanguage}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === "en" ? "Arabic" : "English"}`}
    >
      <motion.span
        className={s.lang}
        animate={{
          rotate: language === "ar" ? 360 : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {language === "en" ? "ع" : " EN "}
      </motion.span>
    </motion.button>
  );
}
