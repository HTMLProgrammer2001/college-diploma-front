import React from 'react';
import {Route, Switch} from 'react-router-dom';

import AllDepartmentsPage from './all';


const Departments: React.FC<{}> = () => (
	<Switch>
		<Route path="/departments" exact component={AllDepartmentsPage}/>
	</Switch>
);

export default Departments;
