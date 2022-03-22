import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import commonEN from './en/common.json';

export const defaultNS = 'common';

export const resources = {
  en: {
    common: commonEN,
  },
} as const;

export const i18n = i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
  ns: ['common'],
  defaultNS,
  interpolation: {
    escapeValue: false,
  },
});
