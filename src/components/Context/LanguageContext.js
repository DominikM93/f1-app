import React, { createContext, useEffect } from "react";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import "../../i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const languages = [
    { code: "en", name: "English", country_code: "gb" },
    { code: "pl", name: "Polish", country_code: "pl" },
    { code: "fr", name: "French", country_code: "fr" },
  ];

  const currentLanguageCode = cookies.get("i18next") || "en";
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

  const { t } = useTranslation("navbar");

  useEffect(() => {
    document.body.dir = currentLanguage.dir || "ltr";
    document.title = t("app_title");
  }, [currentLanguage, t]);

  return (
    <LanguageContext.Provider
      value={{ languages, currentLanguageCode, currentLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
