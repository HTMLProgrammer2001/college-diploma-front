const sameAs = (field: string) => {
	return (value: string, allValues: any) => {
		if(value == null)
			return null;

		return allValues[field] == value ? null : `Поле должно совпадать с полем ${field}`
	}
};

export default sameAs;
