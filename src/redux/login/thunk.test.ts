import {startSubmit, stopSubmit} from 'redux-form';

import fakeStore from '../fakeStore';
import getMockedAxios from '../../mockData/getMockedAxios';
import {IUser} from '../../interfaces/models/IUser';
import loginThunk from './thunks';
import {meLoadSuccess} from '../me/actions';


const mockedApi = getMockedAxios();

describe('Test login thunk', () => {
	beforeEach(() => {
		fakeStore.clearActions();
	});

	it('Test success login', async () => {
		const user: IUser = {id: 1, fullName: 'Test', email: 'test@gmail.com', experience: 2, commission: null, department: null, role: 50},
			token = 'TOKEN';

		//mock
		mockedApi.post.mockResolvedValue({data: {user, token}});
		jest.spyOn(window.localStorage.__proto__, 'setItem');

		await fakeStore.dispatch(loginThunk(null));

		//tests
		expect(fakeStore.getActions()).toEqual([
			startSubmit('loginForm'),
			meLoadSuccess(user),
			stopSubmit('loginForm')
		]);

		expect(localStorage.setItem).toBeCalledTimes(1);
		expect(localStorage.setItem).toBeCalledWith('token', token);
	});

	it('Test error login', async () => {
		const error = 'ERROR';

		//mock
		mockedApi.post.mockRejectedValue({message: error});

		await fakeStore.dispatch(loginThunk(null));

		//tests
		expect(fakeStore.getActions()).toEqual([
			startSubmit('loginForm'),
			stopSubmit('loginForm', {
				_error: error
			})
		]);
	});
});
