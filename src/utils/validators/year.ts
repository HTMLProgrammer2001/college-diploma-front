const year = (value: string) => {
	if(value == null)
		return null;

	const intVal = parseInt(value);
	const curYear = new Date().getFullYear();

	if(!isFinite(intVal))
		return 'Поле должно быть числом';

	return curYear - intVal <= 100 ? null : 'Поле должно быть валидным годом';
};

export default year;
