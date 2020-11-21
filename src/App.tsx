import React, {lazy, useState, Suspense} from 'react';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {I18nextProvider} from 'react-i18next';


import store from './redux/';
import i18n from './translate';

import MenuContext, {IMenuContextData} from './utils/contexts/MenuContext';
import NotFoundPage from './pages/ErrorPages/NotFoundPage';
import Loader from './common/Loader/Loader';
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
				<I18nextProvider i18n={i18n}>
					<Router>
						<Suspense fallback={<Loader/>}>
							<Switch>
								<Route path="/login" exact component={LoginPage}/>
								<Route path="/" component={AdminRoutes}/>
								<Route path="/" component={NotFoundPage}/>
							</Switch>
						</Suspense>
					</Router>
				</I18nextProvider>
			</MenuContext.Provider>

			<ToastContainer/>
		</Provider>
	);
};

export default App;
