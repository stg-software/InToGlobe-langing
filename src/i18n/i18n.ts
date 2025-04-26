// src/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations.json';

// Inicializa el idioma preferido desde localStorage o utiliza el del navegador
const getInitialLanguage = () => {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage && ['es', 'en', 'fr'].includes(savedLanguage)) {
    return savedLanguage;
  }
  // Detecta el idioma del navegador
  const browserLang = navigator.language.split('-')[0];
  return ['es', 'en', 'fr'].includes(browserLang) ? browserLang : 'en';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: translations.es },
      en: { translation: translations.en },
      fr: { translation: translations.fr }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;