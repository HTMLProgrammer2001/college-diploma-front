import findSortRule from './findSortRule';
import {ISort} from '../../interfaces/ISort';


describe('Find sort rule test', () => {
	const existField = 'field1',
		unExistField = 'unExist',
		rules: ISort[] = [{field: existField, direction: 1}, {field: 'field2', direction: -1}],
		findRule: ISort = {field: 'field1', direction: 1};

	it('Should find rule in array', () => {
		const result = findSortRule(rules, existField);
		expect(result).toEqual(findRule);
	});

	it('Should not find rule in array', () => {
		const result = findSortRule(rules, unExistField);
		expect(result).toBeFalsy();
	});
});
