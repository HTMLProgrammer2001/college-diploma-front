import i18next from 'i18next';

const year = (value: string) => {
	if(value == null || value == '')
		return null;

	const intVal = parseInt(value);
	const curYear = new Date().getFullYear();

	if(!isFinite(intVal))
		return i18next.t('validators.number');

	const diff = curYear - intVal;

	return diff <= 100 && diff >= 0 ? null : i18next.t('validators.year');
};

export default year;
