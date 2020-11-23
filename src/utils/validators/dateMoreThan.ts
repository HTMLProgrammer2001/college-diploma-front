import moment from 'moment';
import i18next from 'i18next';


const dateMoreThan = (field: string, equal = true) => {
	return (value: string, allValues: any) => {
		if(value == null || value == '')
			return null;

		const anotherVal = allValues[field];

		if(!anotherVal)
			return null;

		let dateValue = moment(value).toDate(),
			dateAnotherVal = moment(anotherVal).toDate();

		if(dateValue > dateAnotherVal || (equal && dateValue == dateAnotherVal))
			return null;
		else
			return i18next.t('validators.dateMore', {field, context: 'equal'});
	}
};

export default dateMoreThan;
