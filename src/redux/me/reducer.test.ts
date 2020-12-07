import reducer, {IMeState} from './reducer';
import {meLoadStart, meLoadSuccess, meLoadError} from './actions';
import {IUser} from '../../interfaces/models/IUser';


describe('Test me reducer', () => {
	let initialState: IMeState;

	beforeEach(() => {
		//init initial values
		initialState = {isLoading: false, error: null, user: null}
	});

	it('Test that reducer return initial state on other actions', () => {
		const returnState = reducer(initialState, {type: 'TEST'});
		expect(returnState).toBe(initialState);
	});

	it('Test load start', () => {
		const returnState = reducer(initialState, meLoadStart());

		//test immutable
		expect(returnState).not.toBe(initialState);

		//test isLoading change
		expect(returnState).toEqual({...initialState, isLoading: true});
	});

	it('Test success loading', () => {
		const testUser: IUser = {
			fullName: 'Test user',
			department: {name: 'dep', id: 1},
			commission: {name: 'comm', id: 2},
			email: 'css@gmail.com',
			id: 1,
			role: 1,
			experience: 20
		};

		const returnState = reducer(initialState, meLoadSuccess(testUser));

		//test immutable
		expect(returnState).not.toBe(initialState);

		//test user store in state
		expect(returnState).toEqual({...initialState, user: testUser});
	});

	it('Test error loading', () => {
		const error = 'error';
		const returnState = reducer(initialState, meLoadError(error));

		//test immutable
		expect(returnState).not.toBe(initialState);

		//test error store in state
		expect(returnState).toEqual({...initialState, error});
	});
});
