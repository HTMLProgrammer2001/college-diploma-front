import React from 'react';
import {Route, Switch} from 'react-router-dom';

import NotFoundPage from '../ErrorPages/NotFoundPage';
import AllHonorsPage from './all';
import EditHonorPage from './edit';
import AddHonorPage from './add';
import SingleHonorPage from './single';
import ImportHonorPage from './import';


const Honors: React.FC<{}> = () => (
	<Switch>
		<Route path="/honors" exact component={AllHonorsPage}/>
		<Route path="/honors/add" exact component={AddHonorPage}/>
		<Route path="/honors/import" exact component={ImportHonorPage}/>
		<Route path="/honors/:id/edit" exact component={EditHonorPage}/>
		<Route path="/honors/:id" exact component={SingleHonorPage}/>
		<Route path="/" component={NotFoundPage}/>
	</Switch>
);

export default Honors;
