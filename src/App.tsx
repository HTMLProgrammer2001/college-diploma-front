import React, {lazy, useState, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/';

import MenuContext, {IMenuContextData} from './utils/contexts/MenuContext';
import NotFoundPage from './pages/NotFoundPage';
import Loader from './common/Loader';
import AdminRoutes from './AdminRoutes';

//pages
const LoginPage = lazy(() => import('./pages/LoginPage'));

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
					<Suspense fallback={<Loader/>}>
						<Switch>
							<Route path="/login" exact component={LoginPage}/>
							<Route path="/" component={AdminRoutes}/>
							<Route path="/" component={NotFoundPage}/>
						</Switch>
					</Suspense>
				</Router>
			</MenuContext.Provider>
		</Provider>
	);
};

export default App;

