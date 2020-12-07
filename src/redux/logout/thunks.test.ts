import getMockedAxios from '../../mockData/getMockedAxios';
import fakeStore from '../fakeStore';
import logoutThunk from './thunks';
import {logoutError, logoutStart, logoutSuccess} from './actions';
import {meLoadSuccess} from '../me/actions';


const mockedAxios = getMockedAxios();

describe('Test logout thunk', () => {
	beforeEach(() => {
		fakeStore.clearActions();
	});

	it('Test success logout', async () => {
		//mocks
		mockedAxios.post.mockResolvedValue(null);

		const result = await fakeStore.dispatch(logoutThunk());

		//tests
		expect(result).toBeTruthy();
		expect(fakeStore.getActions()).toEqual([logoutStart(), logoutSuccess(), meLoadSuccess(null)]);
	});

	it('Test failed logout', async () => {
		const error = 'ERROR';

		//mocks
		mockedAxios.post.mockRejectedValue({message: error});

		const result = await fakeStore.dispatch(logoutThunk());

		//tests
		expect(result).toBeFalsy();
		expect(fakeStore.getActions()).toEqual([logoutStart(), logoutError(error)]);
	});
});
