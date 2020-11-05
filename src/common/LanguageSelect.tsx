import React from 'react';
import {useTranslation} from 'react-i18next';


const LanguageSelect: React.FC<{}> = () => {
	const {i18n} = useTranslation();

	const handler = (e: React.ChangeEvent<HTMLSelectElement>) => {
		i18n.changeLanguage(e.target.value);
	};

	return (
		<select onChange={handler} value={i18n.language} className="custom-select">
			<option value="en">English</option>
			<option value="ru">Русский</option>
			<option value="ua">Українська</option>
		</select>
	);
};

export default LanguageSelect;
