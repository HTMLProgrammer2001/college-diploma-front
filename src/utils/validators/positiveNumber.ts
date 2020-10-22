const positiveNumber = (str: string) => {
	if(str == null)
		return null;

	let numb = +str;
	return numb && numb >= 0 ? null : 'Введите положительное число';
};

export default positiveNumber;
