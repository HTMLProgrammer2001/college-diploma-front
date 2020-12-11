import reducer, {IDeleteCategoryState} from './reducer';
import {deleteCategoryStart, deleteCategoryError, deleteCategorySuccess} from './actions';


describe('Test categories delete reducer', () => {
	let initialState: IDeleteCategoryState;

	beforeEach(() => {
		initialState = [1, 2, 3];
	});

	it('Test that reducer return initial state on other actions', () => {
		const returnState = reducer(initialState, {type: 'TEST'});
		expect(returnState).toBe(initialState);
	});

	it('Test categories delete start', () => {
		const deleted = 5;
		const returnState = reducer(initialState, deleteCategoryStart(deleted));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState).toEqual([1, 2, 3, 5]);
	});

	it('Test categories delete error', () => {
		const error = 'ERROR',
			deleted = 1;

		const returnState = reducer(initialState, deleteCategoryError(deleted, error));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState).toEqual([2, 3]);
	});

	it('Test categories delete success', () => {
		const deleted = 1;

		const returnState = reducer(initialState, deleteCategorySuccess(deleted));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState).toEqual([2, 3]);
	});
});
