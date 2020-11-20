import moment from 'moment';


const date = (value: string) => {
	if(value == null)
		return null;

	try{
		const date = moment(value);
		return null;
	}
	catch (e) {
		return 'Поле должно быть валидной датой';
	}
};

export default date;
