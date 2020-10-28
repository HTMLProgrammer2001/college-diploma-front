import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';
import AllCommissionsPage from './all';
import EditCommissionPage from './edit';
import AddCommissionPage from './add';


const Commissions: React.FC<{}> = () => (
	<Switch>
		<Route path="/departments" exact component={AllCommissionsPage}/>
		<Route path="/departments/add" exact component={AddCommissionPage}/>
		<Route path="/departments/:id/edit" exact component={EditCommissionPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default Commissions;
