import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../ErrorPages/NotFoundPage';
import AllRanksPage from './all';
import EditRankPage from './edit';
import AddRankPage from './add';

import IsUserRoleMore from '../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../utils/helpers/RoleCodeToName';


const Ranks: React.FC<{}> = () => (
	<Switch>
		<Route path="/ranks" exact component={AllRanksPage}/>
		<Route path="/ranks/add" exact component={AddRankPage}/>
		<Route path="/ranks/:id/edit" exact component={EditRankPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default IsUserRoleMore(Roles.VIEWER, true)(Ranks);
