import React, {lazy, useState, Suspense} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './redux/';
import AdminLayout from './AdminLayout';

import MenuContext, {IMenuContextData} from './utils/contexts/MenuContext';
import NotFoundPage from './pages/NotFoundPage';
import Loader from './common/Loader';

//pages
const HomePage = lazy(() => import('./pages/HomePage/'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));

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

							<Route path="/" render={() => (
								<AdminLayout>
									<Suspense fallback={<Loader/>}>
										<Switch>
											<Route path="/" exact component={HomePage}/>
											<Route path="/profile" exact component={ProfilePage}/>

											<Route path="/" component={NotFoundPage}/>
										</Switch>
									</Suspense>
								</AdminLayout>
							)}/>

							<Route path="/" component={NotFoundPage}/>
						</Switch>
					</Suspense>
				</Router>
			</MenuContext.Provider>
		</Provider>
	);
};

export default App;
