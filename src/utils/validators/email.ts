const email = (str: string) => {
	if(str == null)
		return null;

	return new RegExp('.+@.+\\.\\w{2,}', 'i').test(str) ? null : 'Введите корректный email';
};

export default email;
