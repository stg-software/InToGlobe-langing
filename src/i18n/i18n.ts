import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './translations.json';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: translations.es },
    en: { translation: translations.en },
    fr: { translation: translations.fr },
  },
  lng: (localStorage.getItem('preferredLanguage') as string) || 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false },
});

export default i18n;
