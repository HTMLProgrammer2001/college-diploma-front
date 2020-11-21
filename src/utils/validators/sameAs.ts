import i18next from 'i18next';

const sameAs = (field: string) => {
	return (value: string, allValues: any) => {
		if(value == null)
			return null;

		return allValues[field] == value ? null : i18next.t('validators.sameAs', {field});
	}
};

export default sameAs;
