import i18next from 'i18next';

const lengthIn = (min: number = 0, max: number = Infinity) => {
	if(isFinite(max) && min > max)
		throw new Error('Min must be less than max');

	return (str: string) => {
		if(str == null || str == '')
			return null;

		let context = min && max ? 'both' : max ? 'max' : 'min';

		return str && str.length >= min && str.length <= max ? null :
			i18next.t('validators.lengthIn', {context, min, max});
	};
};

export default lengthIn;
