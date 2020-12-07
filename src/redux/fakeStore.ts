import configureMockStore from 'redux-mock-store';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';

import {rootReducer, RootState} from './';


type DispatchExts = ThunkDispatch<RootState, undefined, any>;

const fakeStore = configureMockStore<RootState, DispatchExts>([thunkMiddleware])(
	rootReducer({} as any, {})
);

export default fakeStore;
