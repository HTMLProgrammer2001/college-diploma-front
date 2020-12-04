import changeSortHandler from './changeSortHandler';
import {ISort} from '../../interfaces/ISort';


describe('Test change sort handler helper', () => {
    it('Should add field if not exists', () => {
	const field = 'test',
	      initial: ISort[] = [],
	      expected = [{field, direction: 1}];

	const result = changeSortHandler(initial, field);
	expect(result).toEqual(expected);
    });

    it('Should change field if direction is normal', () => {
	const field = 'test',
	      initial: ISort[] = [{field, direction: 1}],
	      expected = [{field, direction: -1}];

	const result = changeSortHandler(initial, field);
	expect(result).toEqual(expected);
    });

    it('Should delete field if direction is reverse', () => {
	const field = 'test',
	      initial: ISort[] = [{field, direction: -1}],
	      expected: ISort[] = [];

	const result = changeSortHandler(initial, field);
	expect(result).toEqual(expected);
    });
});
