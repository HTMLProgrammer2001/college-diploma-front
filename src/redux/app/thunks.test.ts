import appThunk from './thunks';
import * as thunkMe from '../me/thunks';
import fakeStore from '../fakeStore';
import {appInitializeStart, appInitializeSuccess} from './actions';


jest.mock('../me/thunks', () => ({
	__esModule: true,
	default: jest.fn()
}));

global.console = {...global.console, log: jest.fn()};

const mockedMe = thunkMe as jest.Mocked<typeof thunkMe>;

describe('Test app thunk', () => {
	beforeEach(() => {
		fakeStore.clearActions();
	});

	it('Test success initializing', async () => {
		//mocks
		mockedMe.default = jest.fn().mockReturnValue({type: 'TEST'});

		await fakeStore.dispatch(appThunk());

		//tests
		expect(fakeStore.getActions()).toContainEqual(appInitializeStart());
		expect(thunkMe.default).toBeCalled();
		expect(fakeStore.getActions()).toContainEqual(appInitializeSuccess());
	});
});
