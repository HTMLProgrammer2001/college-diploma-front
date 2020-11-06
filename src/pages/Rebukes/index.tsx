import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../ErrorPages/NotFoundPage';
import AllRebukesPage from './all';
import EditRebukePage from './edit';
import AddRebukePage from './add';
import SingleRebukePage from './single';
import ImportRebukePage from './import';

import IsUserRoleMore from '../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../utils/helpers/RoleCodeToName';


const Rebukes: React.FC<{}> = () => (
	<Switch>
		<Route path="/rebukes" exact component={AllRebukesPage}/>
		<Route path="/rebukes/add" exact component={AddRebukePage}/>
		<Route path="/rebukes/import" exact component={ImportRebukePage}/>
		<Route path="/rebukes/:id/edit" exact component={EditRebukePage}/>
		<Route path="/rebukes/:id" exact component={SingleRebukePage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default IsUserRoleMore(Roles.VIEWER, true)(Rebukes);
