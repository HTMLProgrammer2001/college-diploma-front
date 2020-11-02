import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../ErrorPages/NotFoundPage';
import AllPublicationsPage from './all';
import EditPublicationPage from './edit';
import AddPublicationPage from './add';

import IsUserRoleMore from '../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../utils/helpers/RoleCodeToName';


const Publications: React.FC<{}> = () => (
	<Switch>
		<Route path="/publications" exact component={AllPublicationsPage}/>
		<Route path="/publications/add" exact component={AddPublicationPage}/>
		<Route path="/publications/:id/edit" exact component={EditPublicationPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default IsUserRoleMore(Roles.VIEWER, true)(Publications);
