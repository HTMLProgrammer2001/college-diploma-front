import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../ErrorPages/NotFoundPage';
import AllUsersPage from './all';
import EditUserPage from './edit';
import AddUserPage from './add';
import ImportUserPage from './import';

import IsUserRoleMore from '../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../utils/helpers/RoleCodeToName';


const Users: React.FC<{}> = () => (
	<Switch>
		<Route path="/users" exact component={AllUsersPage}/>
		<Route path="/users/add" exact component={AddUserPage}/>
		<Route path="/users/:id/edit" exact component={EditUserPage}/>
		<Route path="/users/import" exact component={ImportUserPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default IsUserRoleMore(Roles.VIEWER, true)(Users);
