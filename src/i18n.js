import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import pt from './locales/pt.json';
import es from './locales/es.json';

i18n
  .use(initReactI18next) // Integrando o i18next com React
  .init({
    resources: {
      en: {
        translation: en
      },
      pt: {
        translation: pt
      },
      es: {
        translation: es
      }
    },
    lng: 'pt', // idioma padrão
    fallbackLng: 'en', // idioma de fallback caso não tenha tradução
    interpolation: {
      escapeValue: false // Não precisamos escapar valores em React
    }
  });

export default i18n;
