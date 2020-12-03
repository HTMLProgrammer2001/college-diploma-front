import React from 'react';
import {useTranslation} from 'react-i18next';


const LanguageSelect: React.FC<{}> = () => {
	const {i18n} = useTranslation();

	const handler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		i18n.changeLanguage(e.target.value);
		localStorage.setItem('lng', e.target.value);
	};

	return (
		<select onChange={handler} value={i18n.language} className="custom-select m-1">
			<option value="en">English</option>
			<option value="ru">Русский</option>
			<option value="uk">Українська</option>
		</select>
	);
};

export default LanguageSelect;
