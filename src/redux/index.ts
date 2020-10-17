import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import {composeWithDevTools} from 'redux-devtools-extension';


//create reducer
const rootReducer = combineReducers({
	form: formReducer
});

//create store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
