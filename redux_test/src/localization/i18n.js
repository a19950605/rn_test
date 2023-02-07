import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import translationEN from './en/translation.json';
import translationTC from './tc/translation.json';

export const resources = {
  en: {
    translation: translationEN,
  },
  tc: {
    translation: translationTC,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});
