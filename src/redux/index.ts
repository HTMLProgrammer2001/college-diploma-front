import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {composeWithDevTools} from 'redux-devtools-extension';

//reducers
import me from './me/reducer';
import logout from './logout/reducer';
import profile from './profile/';
import app from './app/reducer';
import departments from './departments/';


import publications from './publications/';
import internships from './internships/';
import qualifications from './qualifications/';


//create reducer
const rootReducer = combineReducers({
	app,
	me,
	logout,
	profile,
	departments,
	form: formReducer
});

//create store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;

export type RootState = ReturnType<typeof rootReducer>;

//action types getter
type ActionCreators = {[key: string]: (...args: any) => any};
type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
export type InferActionTypes<T extends ActionCreators> = ReturnType<PropertiesTypes<T>>;

export type PropType<T, K extends keyof T> = T[K];
