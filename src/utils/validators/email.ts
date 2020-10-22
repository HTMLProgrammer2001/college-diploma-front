const email = (str: string) => {
	return new RegExp('.+@.+\\.\\w{2,}', 'i').test(str) ? null : 'Введите корректный email';
};

export default email;
