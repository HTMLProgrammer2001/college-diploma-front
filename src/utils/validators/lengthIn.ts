import i18next from 'i18next';

const lengthIn = (min: number = 0, max: number = Infinity) => (str: string) => {
	if(str == null)
		return null;

	let context = min && max ? 'both' : max ? 'max' : 'min';

	return str && str.length >= min && str.length <= max ? null :
		i18next.t('validators.lengthIn', {context, min, max});
};

export default lengthIn;
