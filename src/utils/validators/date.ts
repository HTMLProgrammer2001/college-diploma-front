import moment from 'moment';
import i18next from 'i18next';


const date = (value: string) => {
	if(value == null)
		return null;

	try{
		const date = moment(value);
		return null;
	}
	catch (e) {
		return i18next.t('validators.date');
	}
};

export default date;
