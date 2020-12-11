import getMockedAxios from '../../../../mockData/getMockedAxios';
import fakeStore from '../../../fakeStore';
import {ICategory} from '../../../../interfaces/models/ICategory';
import thunkEditCategoryLoad from './thunkEditCategoryLoad';
import {editCategoryLoadError, editCategoryLoadStart, editCategoryLoadSuccess} from '../actions';


const mockedApi = getMockedAxios();

describe('Test edit category load thunk', () => {
	beforeEach(() => {
		fakeStore.clearActions();
	});

	it('Test loading success', async () => {
		const category: ICategory = {id: 1, name: 'Test category'};

		//mock data
		mockedApi.get.mockResolvedValue({data: {data: category}});

		await fakeStore.dispatch(thunkEditCategoryLoad(1));

		//tests
		expect(fakeStore.getActions()).toContainEqual(editCategoryLoadStart());
		expect(fakeStore.getActions()).toContainEqual(editCategoryLoadSuccess(category));
	});

	it('Test loading error', async () => {
		const error = 'ERROR';

		//mock data
		mockedApi.get.mockRejectedValue({message: error});

		await fakeStore.dispatch(thunkEditCategoryLoad(1));

		//tests
		expect(fakeStore.getActions()).toContainEqual(editCategoryLoadStart());
		expect(fakeStore.getActions()).toContainEqual(editCategoryLoadError(error));
	});
});
