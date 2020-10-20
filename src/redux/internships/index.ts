import {combineReducers} from 'redux';

import show from './show/reducer';


const internshipsState = combineReducers({
	show
});

export default internshipsState;
