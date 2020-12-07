import getMockedAxios from '../../mockData/getMockedAxios';
import fakeStore from '../fakeStore';
import meThunk from './thunks';
import {IUser} from '../../interfaces/models/IUser';
import {meLoadError, meLoadStart, meLoadSuccess} from './actions';


const mockedAxios = getMockedAxios();

describe('Test me thunk', () => {
	beforeEach(() => {
		fakeStore.clearActions();
	});

	it('Test return falsy when token not exist', async () => {
		//delete token
		localStorage.removeItem('token');
		const result = await fakeStore.dispatch(meThunk());

		//test
		expect(result).toBeFalsy();
	});

	it('Test success scenario', async () => {
		const user: IUser = {id: 1, fullName: 'Test', email: 'test@gmail.com', experience: 2, commission: null, department: null, role: 50};

		//mock data
		localStorage.setItem('token', 'test');
		mockedAxios.get = jest.fn().mockResolvedValue({data: {user}});

		const result = await fakeStore.dispatch(meThunk());

		//test
		expect(result).toBeTruthy();
		expect(fakeStore.getActions()).toContainEqual(meLoadStart());
		expect(fakeStore.getActions()).toContainEqual(meLoadSuccess(user));
	});

	it('Test error', async () => {
		const error = 'Error';

		//mock data
		localStorage.setItem('token', 'test');
		mockedAxios.get = jest.fn().mockRejectedValue({message: error});

		const result = await fakeStore.dispatch(meThunk());

		//tests
		expect(result).toBeFalsy();
		expect(fakeStore.getActions()).toContainEqual(meLoadStart());
		expect(fakeStore.getActions()).toContainEqual(meLoadError(error));
	});
});
