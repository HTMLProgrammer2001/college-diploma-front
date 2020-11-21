import i18next from 'i18next';

const url = (value: string) => {
	if(value == null)
		return null;

	return /https?:\/\/.+(\..+)+/.test(value) ? null : i18next.t('validators.url');
};

export default url;
