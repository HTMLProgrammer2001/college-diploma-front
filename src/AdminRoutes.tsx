import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';

import IsAuthenticated from './utils/HOC/IsAuthenticated';
import Loader from './common/Loader';
import AdminLayout from './AdminLayout';
import NotFoundPage from './pages/NotFoundPage';

//pages
const HomePage = lazy(() => import('./pages/HomePage/'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const ProfileEditPage = lazy(() => import('./pages/ProfileEditPage'));
const Departments = lazy(() => import('./pages/Departments/'));


const AdminRoutes: React.FC<{}> = () => (
	<AdminLayout>
		<Suspense fallback={<Loader/>}>
			<Switch>
				<Route path="/" exact component={HomePage}/>

				<Route path="/profile" exact component={ProfilePage}/>
				<Route path="/profile/edit" exact component={ProfileEditPage}/>

				<Route path="/departments" component={Departments}/>

				<Route path="/" component={NotFoundPage}/>
			</Switch>
		</Suspense>
	</AdminLayout>
);

export default IsAuthenticated(true)(AdminRoutes);
