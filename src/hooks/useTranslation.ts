// src/hooks/useTranslation.ts
import { useTranslation as useI18nTranslation } from 'react-i18next';
import { useLanguage } from '../context/LanguageContext';

export const useTranslation = () => {
  const { t, i18n } = useI18nTranslation();
  const { language, changeLanguage } = useLanguage();
  
  return {
    t,
    i18n,
    language,
    changeLanguage
  };
};