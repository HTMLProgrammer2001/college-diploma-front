import getMockedAxios from '../../../mockData/getMockedAxios';
import thunkAddCategory from './thunks';
import fakeStore from '../../fakeStore';
import {startSubmit, stopSubmit} from 'redux-form';


const mockedAxios = getMockedAxios();

describe('Test add commission thunk', () => {
	beforeEach(() => {
		fakeStore.clearActions();
	});

	it('Test success add', async () => {
		//mock data
		mockedAxios.post.mockResolvedValue(null);

		await fakeStore.dispatch(thunkAddCategory(null));

		//test
		expect(fakeStore.getActions()).toContainEqual(startSubmit('categoriesAddForm'));
		expect(fakeStore.getActions()).toContainEqual(stopSubmit('categoriesAddForm'));
	});

	it('Test error', async () => {
		const error = 'Error';

		//mock data
		mockedAxios.post.mockRejectedValue({message: error});

		await fakeStore.dispatch(thunkAddCategory(null));

		//tests
		expect(fakeStore.getActions()).toContainEqual(startSubmit('categoriesAddForm'));
		expect(fakeStore.getActions()).toContainEqual(stopSubmit('categoriesAddForm', {_error: error}));
	});
});
