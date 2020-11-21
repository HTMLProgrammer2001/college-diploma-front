import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.use(Backend)
	.init({
		detection: {
			order: ['querystring', 'localStorage', 'sessionStorage', 'navigator'],

			// keys or params to lookup language from
			lookupQuerystring: 'lng',
			lookupLocalStorage: 'lng',
			lookupSessionStorage: 'lng',
		},
		backend: {
			loadPath: `${process.env.PUBLIC_URL}/translations/{{lng}}.json`,
			allowMultiloading: false
		},
		fallbackLng: 'en',
		preload: ['en'],
		interpolation: {escapeValue: false}
	});

export default i18n;
