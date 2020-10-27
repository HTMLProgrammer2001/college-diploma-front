import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';
import AllDepartmentsPage from './all';
import EditDepartmentPage from './edit';


const Departments: React.FC<{}> = () => (
	<Switch>
		<Route path="/departments" exact component={AllDepartmentsPage}/>
		<Route path="/departments/:id/edit" exact component={EditDepartmentPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default Departments;
