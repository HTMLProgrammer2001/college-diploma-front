import i18next from 'i18next';

const required = (str: string) => {
	return str ? null : i18next.t('validators.required');
};

export default required;
