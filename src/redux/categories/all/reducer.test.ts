import reducer, {IAllCategoriesState} from './reducer';
import {allCategoriesStart, allCategoriesChangeSort, allCategoriesDelete, allCategoriesError, allCategoriesSuccess} from './actions';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {ICategory} from '../../../interfaces/models/ICategory';


describe('Test categories all reducer', () => {
	let initialState: IAllCategoriesState;

	beforeEach(() => {
		initialState = {isLoading: false, error: null, categories: [], currentPage: 0, total: 0, pageSize: 5, sort: []};
	});

	it('Test that reducer return initial state on other actions', () => {
		const returnState = reducer(initialState, {type: 'TEST'});
		expect(returnState).toBe(initialState);
	});

	it('Test categories load start', () => {
		const returnState = reducer(initialState, allCategoriesStart());

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState).toEqual({...initialState, isLoading: true});
	});

	it('Test categories load error', () => {
		initialState = {...initialState, isLoading: true};

		const error = 'ERROR';
		const returnState = reducer(initialState, allCategoriesError(error));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState).toEqual({...initialState, error, isLoading: false});
	});

	it('Test success categories load', () => {
		initialState = {...initialState, isLoading: true, error: 'ERROR'};

		const payload: IGeneralPaginationResponse<ICategory> = {
			data: [{name: 'Test', id: 1}, {name: 'Test 2', id: 2}],
			meta: {current_page: 2, total: 20, per_page: 10}
		};

		const returnState = reducer(initialState, allCategoriesSuccess(payload));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState.isLoading).toBeFalsy();
		expect(returnState.error).toBeNull();

		expect(returnState).toMatchObject({
			categories: payload.data,
			pageSize: payload.meta.per_page,
			total: payload.meta.total,
			currentPage: payload.meta.current_page
		});
	});

	it('Test change sort', () => {
		const changeField = 'field';
		const returnState = reducer(initialState, allCategoriesChangeSort(changeField));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState.sort).toEqual([{field: changeField, direction: 1}]);
	});

	it('Test change sort delete', () => {
		const changeField = 'field';
		initialState = {...initialState, sort: [{field: changeField, direction: -1}]};

		const returnState = reducer(initialState, allCategoriesChangeSort(changeField));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState.sort).toEqual([]);
	});

	it('Test categories delete for exist', () => {
		const deleteID = 1;
		const returnState = reducer(initialState, allCategoriesDelete(deleteID));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState.categories).toEqual(initialState.categories.map(rule => rule.id != deleteID));
	});

	it('Test categories delete for unexist', () => {
		const deleteID = 999;
		const returnState = reducer(initialState, allCategoriesDelete(deleteID));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState.categories).toEqual(initialState.categories);
	});
});
