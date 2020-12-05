import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../ErrorPages/NotFoundPage';
import AllCategoriesPage from './all';
import EditCategoryPage from './edit';
import AddCategoryPage from './add';

import IsUserRoleMore from '../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../utils/helpers/converters/RoleCodeToName';


const Categories: React.FC<{}> = () => (
	<Switch>
		<Route path="/categories" exact render={({location}) => <AllCategoriesPage key={location.pathname}/>}/>
		<Route path="/categories/add" exact component={AddCategoryPage}/>
		<Route path="/categories/:id/edit" exact component={EditCategoryPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default IsUserRoleMore(Roles.VIEWER, true)(Categories);
