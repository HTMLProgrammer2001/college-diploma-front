import reducer, {IEditCategoryState} from './reducer';
import {editCategoryLoadStart, editCategoryLoadError, editCategoryLoadSuccess} from './actions';
import {ICategory} from '../../../interfaces/models/ICategory';


describe('Test edit categories reducer', () => {
	let initialState: IEditCategoryState;

	beforeEach(() => {
		initialState = {isLoading: false, error: null, category: null};
	});

	it('Test edit category start', () => {
		const returnState = reducer(initialState, editCategoryLoadStart());

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState).toEqual({...initialState, isLoading: true});
	});

	it('Test edit category success', () => {
		const category: ICategory = {id: 1, name: 'Test'};

		const returnState = reducer(initialState, editCategoryLoadSuccess(category));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState).toEqual({...initialState, category});
	});

	it('Test edit category error', () => {
		const error = 'ERROR';

		const returnState = reducer(initialState, editCategoryLoadError(error));

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState).toEqual({...initialState, error});
	});
});
