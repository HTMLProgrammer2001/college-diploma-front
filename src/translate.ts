import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

//translations
import ru from './translations/ru.json';
import en from './translations/en.json';
import ua from './translations/ua.json';


i18n
	.use(initReactI18next)
	.init({
		resources: {
			ru: {translation: ru},
			en: {translation: en},
			ua: {translation: ua}
		},
		lng: 'ru',
		fallbackLng: 'en',
		interpolation: {
			escapeValue: false
		}
	});
