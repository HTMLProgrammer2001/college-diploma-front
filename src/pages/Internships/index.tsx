import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../ErrorPages/NotFoundPage';
import AllInternshipsPage from './all';
import EditInternshipPage from './edit';
import AddInternshipPage from './add';
import SingleInternshipPage from './single';
import ImportInternshipPage from './import';


const Internships: React.FC<{}> = () => (
	<Switch>
		<Route path="/internships" exact component={AllInternshipsPage}/>
		<Route path="/internships/add" exact component={AddInternshipPage}/>
		<Route path="/internships/import" exact component={ImportInternshipPage}/>
		<Route path="/internships/:id/edit" exact component={EditInternshipPage}/>
		<Route path="/internships/:id" exact component={SingleInternshipPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default Internships;
