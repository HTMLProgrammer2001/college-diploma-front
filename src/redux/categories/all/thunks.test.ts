import getMockedAxios from '../../../mockData/getMockedAxios';
import fakeStore from '../../fakeStore';
import allCategoriesThunk from './thunks';
import {allCategoriesStart, allCategoriesSuccess, allCategoriesError} from './actions';
import {IGeneralPaginationResponse} from '../../../interfaces/responses/IGeneralPaginationResponse';
import {ICategory} from '../../../interfaces/models/ICategory';


const mockedApi = getMockedAxios();

describe('Test all categories thunk', () => {
	beforeEach(() => {
		fakeStore.clearActions();
	});

	it('Test success scenario', async () => {
		const payload: IGeneralPaginationResponse<ICategory> = {
			data: [{name: 'Test', id: 1}, {name: 'Test 2', id: 2}],
			meta: {current_page: 2, total: 20, per_page: 10}
		};

		//mocks
		mockedApi.get.mockResolvedValue({data: payload});

		await fakeStore.dispatch(allCategoriesThunk(1));

		//tests
		expect(fakeStore.getActions()).toContainEqual(allCategoriesStart());
		expect(fakeStore.getActions()).toContainEqual(allCategoriesSuccess(payload));
	});

	it('Test error scenario', async () => {
		const error = 'ERROR';

		//mocks
		mockedApi.get.mockRejectedValue({message: error});

		await fakeStore.dispatch(allCategoriesThunk());

		//tests
		expect(fakeStore.getActions()).toContainEqual(allCategoriesStart());
		expect(fakeStore.getActions()).toContainEqual(allCategoriesError(error));
	});
});
