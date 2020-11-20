import moment from 'moment';


const dateMoreThan = (field: string, equal = true) => {
	return (value: string, allValues: any) => {
		if(value == null)
			return null;

		const anotherVal = allValues[field];

		if(!anotherVal)
			return null;

		let dateValue = moment(value).toDate(),
			dateAnotherVal = moment(anotherVal).toDate();

		if(dateValue > dateAnotherVal || (equal && dateValue == dateAnotherVal))
			return null;
		else
			return `Поле должно быть больше ${equal ? 'или равно' : ''} ${field}`;
	}
};

export default dateMoreThan;
