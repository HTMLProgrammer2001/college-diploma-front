const moreThan = (field: string, equal = true) => {
	return (value: string, allValues: any) => {
		if(value == null)
			return null;

		if(value > allValues[field] || (equal && value == allValues[field]))
			return null;
		else
			return `Поле должно быть больше ${equal ? 'или равно' : ''} ${field}`;
	}
};

export default moreThan;
