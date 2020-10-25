import {ISort} from '../../interfaces/ISort';
import findSortRule from './findSortRule';


export default (sort: ISort[], field: string): ISort[] => {
	let rule = findSortRule(sort, field);

	//rule was not find then create it
	if(rule ==  undefined)
		return [...sort, {field, direction: 1}];

	//change sort direction
	else if(rule.direction == 1) {
		rule.direction = -1;
		return [...sort];
	}

	//delete rule
	return [...sort.filter((item) => item.field != field)];
};
