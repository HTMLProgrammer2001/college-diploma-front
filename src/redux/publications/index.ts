import {combineReducers} from 'redux';

import show from './show/reducer';


const publicationsState = combineReducers({
	show
});

export default publicationsState;
