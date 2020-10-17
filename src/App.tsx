import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/';
import HomePage from './pages/HomePage/';
import LoginPage from './pages/LoginPage';


const App = () => (
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path="/login" exact component={LoginPage}/>
				<Route path="/" exact component={HomePage}/>

				<Route path="/" render={() => <div>Not found</div>}/>
			</Switch>
		</Router>
	</Provider>
);

export default App;
