import i18next from 'i18next';

const moreThan = (field: string, equal = true) => {
	return (value: string, allValues: any) => {
		if(!value || !allValues[field])
			return null;

		if(+value > +allValues[field] || (equal && +value == +allValues[field]))
			return null;
		else
			return i18next.t('validators.dateMore', {context: 'equal', field});
	}
};

export default moreThan;
