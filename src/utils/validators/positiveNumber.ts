import i18next from 'i18next';

const positiveNumber = (str: string) => {
	if(str == null)
		return null;

	let numb = +str;
	return isFinite(numb) && numb >= 0 ? null : i18next.t('validators.positive');
};

export default positiveNumber;
