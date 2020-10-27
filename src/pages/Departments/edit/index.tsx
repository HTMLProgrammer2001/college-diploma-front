import React from 'react';
import {Button, Card, Row} from 'react-bootstrap';

import BackButton from '../../../common/BackButton';
import EditDepartmentForm from './EditDepartmentForm';


const EditDepartmentPage: React.FC<{}> = () => (
	<>
		<div className="title">Редактировать отделения</div>

		<Card className="mr-5">
			<Card.Body>
				<EditDepartmentForm onSubmit={console.log}/>
			</Card.Body>

			<Card.Footer>
				<Row className="justify-content-between p-2">
					<BackButton/>
					<Button variant="warning">Редактировать</Button>
				</Row>
			</Card.Footer>
		</Card>
	</>
);

export default EditDepartmentPage;
