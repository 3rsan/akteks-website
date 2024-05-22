// src/i18n/config.ts

// Core i18next library.
import i18n from 'i18next';
// Bindings for React: allow components to
// re-render when language changes.
import { initReactI18next } from 'react-i18next';

import common_de from '../translations/de/common.json';
import common_en from '../translations/en/common.json';
import common_tr from '../translations/tr/common.json';
import common_es from '../translations/es/common.json';
import common_ar from '../translations/ar/common.json';
import common_ru from '../translations/ru/common.json';

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'tr', // language to use
  resources: {
    en: {
      translation: common_en, // 'common' is our custom namespace
    },
    de: {
      translation: common_de,
    },
    tr: {
      translation: common_tr,
    },
    es: {
      translation: common_es,
    },
    ar: {
      translation: common_ar,
    },
    ru: {
      translation: common_ru,
    },
  },
});

export default i18n;
