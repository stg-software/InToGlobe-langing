import { useTranslation as usei18nTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../context/LanguageContext';

export const useTranslation = () => {
  const { t, i18n } = usei18nTranslation();
  const { language, changeLanguage } = useLanguage();

  return {
    t,
    i18n,
    language,
    changeLanguage: (lang: Language) => changeLanguage(lang),
  };
};
