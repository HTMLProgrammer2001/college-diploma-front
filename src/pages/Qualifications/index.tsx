import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../ErrorPages/NotFoundPage';
import AllQualificationsPage from './all';
import EditQualificationPage from './edit';
import AddQualificationPage from './add';
import SingleQualificationPage from './single';
import ImportQualificationPage from './import';


const Qualifications: React.FC<{}> = () => (
	<Switch>
		<Route path="/qualifications" exact component={AllQualificationsPage}/>
		<Route path="/qualifications/add" exact component={AddQualificationPage}/>
		<Route path="/qualifications/import" exact component={ImportQualificationPage}/>
		<Route path="/qualifications/:id/edit" exact component={EditQualificationPage}/>
		<Route path="/qualifications/:id" exact component={SingleQualificationPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default Qualifications;
