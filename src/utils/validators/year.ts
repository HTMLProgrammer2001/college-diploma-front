import i18next from 'i18next';

const year = (value: string) => {
	if(value == null)
		return null;

	const intVal = parseInt(value);
	const curYear = new Date().getFullYear();

	if(!isFinite(intVal))
		return 'Поле должно быть числом';

	return curYear - intVal <= 100 ? null : i18next.t('validators.year');
};

export default year;
