const phone = (str: string) => {
	if(str == null)
		return null;

	return new RegExp('(\\+38)?0\\d{9}').test(str) ? null : 'Введите корректный телефон';
};

export default phone;
