const lengthIn = (min: number = 0, max: number = Infinity) => (str: string) => {
	if(str == null)
		return null;

	let resultString = 'Поле должно содержать значение';

	if(min)
		resultString += ` от ${min}`;

	if(isFinite(max))
		resultString += ` до ${max}`;

	return str && str.length >= min && str.length <= max ? null : resultString;
};

export default lengthIn;
