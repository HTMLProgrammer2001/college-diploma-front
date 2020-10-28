import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';
import AllCommissionsPage from './all';
import EditCommissionPage from './edit';
import AddCommissionPage from './add';


const Commissions: React.FC<{}> = () => (
	<Switch>
		<Route path="/commissions" exact component={AllCommissionsPage}/>
		<Route path="/commissions/add" exact component={AddCommissionPage}/>
		<Route path="/commissions/:id/edit" exact component={EditCommissionPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default Commissions;
