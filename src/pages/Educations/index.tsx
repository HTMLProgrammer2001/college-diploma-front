import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../ErrorPages/NotFoundPage';
import AllEducationsPage from './all';
import EditEducationPage from './edit';
import AddEducationPage from './add';
import SingleEducationPage from './single';

import IsUserRoleMore from '../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../utils/helpers/RoleCodeToName';


const Educations: React.FC<{}> = () => (
	<Switch>
		<Route path="/educations" exact component={AllEducationsPage}/>
		<Route path="/educations/add" exact component={AddEducationPage}/>
		<Route path="/educations/:id/edit" exact component={EditEducationPage}/>
		<Route path="/educations/:id" exact component={SingleEducationPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default IsUserRoleMore(Roles.VIEWER, true)(Educations);
