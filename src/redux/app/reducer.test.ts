import reducer, {IAppState} from './reducer';
import {appInitializeStart, appInitializeSuccess, appResetError, appSetError} from './actions';


describe('Test app reducer', () => {
	let initialState: IAppState;

	beforeEach(() => {
		//init initial values
		initialState = {isLoading: false, error: null, initialized: false};
	});

	it('Test that reducer return initial state on other actions', () => {
		const returnState = reducer(initialState, {type: 'TEST'});
		expect(returnState).toBe(initialState);
	});

	it('Test initialize start', () => {
		const returnState = reducer(initialState, appInitializeStart());

		//test immutable
		expect(returnState).not.toBe(initialState);

		//test isLoading change
		expect(returnState).toEqual({...initialState, isLoading: true});
	});

	it('Test success initialize', () => {
		const returnState = reducer(initialState, appInitializeSuccess());

		//test immutable
		expect(returnState).not.toBe(initialState);

		//test initialized store in state
		expect(returnState).toEqual({...initialState, isLoading: false, initialized: true});
	});

	it('Test error', () => {
		const error = 'error';
		const errorCode = 404;
		const returnState = reducer(initialState, appSetError(errorCode, error));

		//test immutable
		expect(returnState).not.toBe(initialState);

		//test error store in state
		expect(returnState).toEqual({...initialState, error: {code: errorCode, msg: error}});
	});

	it('Test reset error', () => {
		initialState = {...initialState, error: {code: 404, msg: 'Not found'}};

		const returnState = reducer(initialState, appResetError());

		//tests
		expect(returnState).not.toBe(initialState);
		expect(returnState).toEqual({...initialState, error: null});
	});
});
