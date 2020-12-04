import moment from 'moment';
import i18next from 'i18next';


const date = (value: string) => {
	if(value == null || value == '')
		return null;

	const result = moment(value, 'DD.MM.YYYY', true);
	return result.isValid() ? null : i18next.t('validators.date');
};

export default date;
