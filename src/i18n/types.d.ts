import 'react-i18next';

import translations from './translations.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    resources: typeof translations['es'];
  }
}