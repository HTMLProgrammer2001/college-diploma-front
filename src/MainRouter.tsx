import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';
import {ConnectedRouter} from "connected-react-router";

import store, {myHistory} from './redux';
import {appResetError} from './redux/app/actions';

import Loader from './common/Loader/Loader';
import AdminRoutes from './AdminRoutes';
import NotFoundPage from './pages/ErrorPages/NotFoundPage';


//pages
const LoginPage = lazy(() => import('./pages/LoginPage'));

//reset current error on location change
myHistory.listen(() => {
	store.dispatch(appResetError());
});

const MainRouter: React.FC<{}> = () => (
	<ConnectedRouter history={myHistory}>
		<Suspense fallback={<Loader/>}>
			<Switch>
				<Route path="/login" exact component={LoginPage}/>
				<Route path="/" component={AdminRoutes}/>
				<Route path="/" component={NotFoundPage}/>
			</Switch>
		</Suspense>
		)}/>
	</ConnectedRouter>
);

export default MainRouter;
