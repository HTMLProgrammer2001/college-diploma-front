import React, {lazy, useState, Suspense} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {I18nextProvider} from 'react-i18next';
import {ConnectedRouter} from 'connected-react-router';

import store, {myHistory} from './redux/';
import i18n from './translate';

import MenuContext, {IMenuContextData} from './utils/contexts/MenuContext';
import NotFoundPage from './pages/ErrorPages/NotFoundPage';
import Loader from './common/Loader/Loader';
import AdminRoutes from './AdminRoutes';
import DownloadContext, {IDownloadContextData} from './utils/contexts/DownloadContext';


//pages
const LoginPage = lazy(() => import('./pages/LoginPage'));


const App = () => {
	//initialize contexts
	const [isMenuOpen, changeMenuOpen] = useState(false),
		menuContextData: IMenuContextData = {
			isOpen: isMenuOpen,
			changeOpen: changeMenuOpen
		};

	const [downloadEvent, setDownloadEvent] = useState<any>(null),
		downloadContextData: IDownloadContextData = {
			event: downloadEvent,
			setEvent: setDownloadEvent
		};

	window.addEventListener('beforeinstallprompt', (e) => {
		//prevent download window and set context
		e.preventDefault();
		setDownloadEvent(e);
	});

	return (
		<Provider store={store}>
			<MenuContext.Provider value={menuContextData}>
				<DownloadContext.Provider value={downloadContextData}>
					<I18nextProvider i18n={i18n}>
						<ConnectedRouter history={myHistory}>
							<Suspense fallback={<Loader/>}>
								<Switch>
									<Route path="/login" exact component={LoginPage}/>
									<Route path="/" component={AdminRoutes}/>
									<Route path="/" component={NotFoundPage}/>
								</Switch>
							</Suspense>
						</ConnectedRouter>
					</I18nextProvider>
				</DownloadContext.Provider>
			</MenuContext.Provider>

			<ToastContainer/>
		</Provider>
	);
};

export default App;
