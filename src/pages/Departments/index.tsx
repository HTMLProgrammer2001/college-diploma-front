import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AllDepartmentsPage from './all';
import NotFoundPage from '../NotFoundPage';


const Departments: React.FC<{}> = () => (
	<Switch>
		<Route path="/departments" exact component={AllDepartmentsPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default Departments;
