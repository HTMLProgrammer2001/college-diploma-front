import {startSubmit, stopSubmit} from 'redux-form';

import getMockedAxios from '../../../../mockData/getMockedAxios';
import fakeStore from '../../../fakeStore';
import editCategoryThunk from './thunkEditCategory';


const mockedApi = getMockedAxios();

describe('Test edit category thunk', () => {
	beforeEach(() => {
		fakeStore.clearActions();
	});

	it('Test edit category thunk success', async () => {
		//mocks
		mockedApi.post.mockResolvedValue(null);

		await fakeStore.dispatch(editCategoryThunk(1, null));

		//tests
		expect(fakeStore.getActions()).toContainEqual(startSubmit('categoriesEditForm'));
		expect(fakeStore.getActions()).toContainEqual(stopSubmit('categoriesEditForm'));
	});

	it('Test edit category thunk error', async () => {
		const error = 'ERROR';

		//mocks
		mockedApi.post.mockRejectedValue({message: error});

		await fakeStore.dispatch(editCategoryThunk(1, null));

		//tests
		expect(fakeStore.getActions()).toContainEqual(startSubmit('categoriesEditForm'));
		expect(fakeStore.getActions()).toContainEqual(stopSubmit('categoriesEditForm'));
	});
});
