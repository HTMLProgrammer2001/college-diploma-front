import i18next from 'i18next';

const phone = (str: string) => {
	if(str == null || str == '')
		return null;

	return new RegExp('^(\\+38)?0\\d{9}$').test(str) ? null : i18next.t('validators.phone');
};

export default phone;
