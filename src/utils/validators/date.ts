import moment from 'moment';
import i18next from 'i18next';


const date = (value: string) => {
	if(value == null || value == '')
		return null;

	const result1 = moment(value, 'DD.MM.YYYY', true),
		result2 = moment(value, 'YYYY-MM-DD', true);

	return result1.isValid() || result2.isValid() ? null : i18next.t('validators.date');
};

export default date;
