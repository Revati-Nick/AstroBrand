import i18n from 'i18next';
import en from './locales/en.json';
import ru from './locales/ru.json';
import { initReactI18next } from 'react-i18next';

i18n.init({
  resources: {
    en: {
      translation: en
    },
    ru: {
      translation: ru
    }
  },
  lng: 'en', // default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

export default i18n;