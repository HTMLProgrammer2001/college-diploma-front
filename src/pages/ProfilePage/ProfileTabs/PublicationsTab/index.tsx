import React from 'react';
import {Container} from 'react-bootstrap';

import PublicationsFilterForm from './PublicationsFilterForm';


const PublicationsTab: React.FC<{}> = () => (
	<div className="mt-3">
		<h3>Публикации</h3>

		<Container>
			<PublicationsFilterForm onSubmit={console.log}/>
		</Container>
	</div>
);

export default PublicationsTab;
