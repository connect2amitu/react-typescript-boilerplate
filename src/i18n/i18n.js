import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './translations/en.json';
import hi from './translations/hi.json';

const lng = localStorage.getItem('i18nextLng') ?? 'en';

// translation catalog
const resources = {
	en: { translation: en },
	hi: { translation: hi },
};

i18n
	.use(initReactI18next) // passes i18n down to react-i18next
	.use(LanguageDetector)
	.init({
		// the translations
		// (tip move them in a JSON file and import them,
		// or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
		resources,
		lng, // if you're using a language detector, do not define the lng option
		fallbackLng: 'en',

		interpolation: {
			escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
		},
		react: {
			wait: true,
			useSuspense: false,
		},
	});
