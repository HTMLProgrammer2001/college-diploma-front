import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';

import IsAuthenticated from './utils/HOC/IsAuthenticated';
import Loader from './common/Loader';
import NotFoundPage from './pages/NotFoundPage';
import AdminLayout from './AdminLayout';

//pages
const HomePage = lazy(() => import('./pages/HomePage/'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const ProfileEditPage = lazy(() => import('./pages/ProfileEditPage'));


const AdminRoutes: React.FC<{}> = () => (
	<AdminLayout>
		<Suspense fallback={<Loader/>}>
			<Switch>
				<Route path="/" exact component={HomePage}/>

				<Route path="/profile" exact component={ProfilePage}/>
				<Route path="/profile/edit" exact component={ProfileEditPage}/>

				<Route path="/" component={NotFoundPage}/>
			</Switch>
		</Suspense>
	</AdminLayout>
);

export default IsAuthenticated(true)(AdminRoutes);
