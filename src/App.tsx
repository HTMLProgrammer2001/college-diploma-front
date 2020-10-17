import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/';
import HomePage from './pages/HomePage/';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import AdminLayout from './AdminLayout';

import MenuContext, {IMenuContextData} from './utils/contexts/MenuContext';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
	const [isMenuOpen, changeMenuOpen] = useState(false),
		menuContextData: IMenuContextData = {
			isOpen: isMenuOpen,
			changeOpen: changeMenuOpen
		};

	return (
		<Provider store={store}>
			<MenuContext.Provider value={menuContextData}>
				<Router>
					<Switch>
						<Route path="/login" exact component={LoginPage}/>
						<Route path="/" render={() => (
							<AdminLayout>
								<Switch>
									<Route path="/" exact component={HomePage}/>
									<Route path="/profile" exact component={ProfilePage}/>

									<Route path="/" component={NotFoundPage}/>
								</Switch>
							</AdminLayout>
						)}/>

						<Route path="/" component={NotFoundPage}/>
					</Switch>
				</Router>
			</MenuContext.Provider>
		</Provider>
	);
};

export default App;
