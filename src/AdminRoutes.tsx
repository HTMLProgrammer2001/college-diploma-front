import React, {lazy, Suspense} from 'react';
import {Route, Switch} from 'react-router';

import IsAuthenticated from './utils/HOC/IsAuthenticated';
import Loader from './common/Loader/Loader';
import AdminLayout from './AdminLayout';
import NotFoundPage from './pages/ErrorPages/NotFoundPage';

//pages
const HomePage = lazy(() => import('./pages/HomePage/'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const ProfileEditPage = lazy(() => import('./pages/ProfileEditPage'));
const Departments = lazy(() => import('./pages/Departments/'));
const Commissions = lazy(() => import('./pages/Commissions/'));
const Ranks = lazy(() => import('./pages/Ranks/'));
const Publications = lazy(() => import('./pages/Publications/'));
const Categories = lazy(() => import('./pages/Categories/'));
const Honors = lazy(() => import('./pages/Honors/'));
const Rebukes = lazy(() => import('./pages/Rebukes/'));


const AdminRoutes: React.FC<{}> = () => (
	<AdminLayout>
		<Suspense fallback={<Loader/>}>
			<div className="w-100">
				<Switch>
					<Route path="/" exact component={HomePage}/>

					<Route path="/profile" exact component={ProfilePage}/>
					<Route path="/profile/edit" exact component={ProfileEditPage}/>

					<Route path="/departments" component={Departments}/>
					<Route path="/commissions" component={Commissions}/>
					<Route path="/ranks" component={Ranks}/>
					<Route path="/publications" component={Publications}/>
					<Route path="/categories" component={Categories}/>
					<Route path="/honors" component={Honors}/>
					<Route path="/rebukes" component={Rebukes}/>

					<Route path="/" component={NotFoundPage}/>
				</Switch>
			</div>
		</Suspense>
	</AdminLayout>
);

export default IsAuthenticated(true)(AdminRoutes);
