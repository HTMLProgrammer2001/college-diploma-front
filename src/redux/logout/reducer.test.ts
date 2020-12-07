import reducer, {ILogoutState} from './reducer';
import {logoutError, logoutStart, logoutSuccess} from './actions';


describe('Test logout reducer', () => {
	let initialState: ILogoutState;

	beforeEach(() => {
		initialState = {error: null, isLoading: false};
	});

	it('Test reducer return state on another action', () => {
		const returnState = reducer(initialState, {type: 'TEST'});
		expect(returnState).toBe(initialState);
	});

	it('Test start logout', () => {
		const returnState = reducer(initialState, logoutStart());
		expect(returnState).toEqual({...initialState, isLoading: true});
	});

	it('Test success logout', () => {
		initialState = {error: 'error', isLoading: false};
		const returnState = reducer(initialState, logoutSuccess());

		//tests
		expect(returnState).toEqual({error: null, isLoading: false});
	});

	it('Test error logout', () => {
		const error = 'ERROR';

		const returnState = reducer(initialState, logoutError(error));
		expect(returnState).toEqual({...initialState, error});
	});
});
