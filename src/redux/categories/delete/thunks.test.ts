import getMockedAxios from '../../../mockData/getMockedAxios';
import fakeStore from '../../fakeStore';
import deleteCategoryThunk from './thunks';
import {deleteCategoryError, deleteCategoryStart, deleteCategorySuccess} from './actions';


const mockedApi = getMockedAxios();

describe('Test delete category thunk', () => {
	beforeEach(() => {
		fakeStore.clearActions();
	});

	it('Test success scenario', async () => {
		const id = 1;

		//mocks
		mockedApi.delete.mockResolvedValue(null);

		await fakeStore.dispatch(deleteCategoryThunk(id));

		//tests
		expect(fakeStore.getActions()).toContainEqual(deleteCategoryStart(id));
		expect(fakeStore.getActions()).toContainEqual(deleteCategorySuccess(id));
	});

	it('Test error scenario', async () => {
		const id = 1,
			error = 'ERROR';

		//mocks
		mockedApi.delete.mockRejectedValue({message: error});

		await fakeStore.dispatch(deleteCategoryThunk(id));

		//tests
		expect(fakeStore.getActions()).toContainEqual(deleteCategoryStart(id));
		expect(fakeStore.getActions()).toContainEqual(deleteCategoryError(id, error));
	});
});
