import React from 'react';
import {Button, Card, Row} from 'react-bootstrap';

import BackButton from '../../../common/BackButton';
import AddDepartmentForm from './AddDepartmentForm';


const AddDepartmentPage: React.FC<{}> = () => (
	<>
		<div className="title">Добавить отделение</div>

		<Card className="mr-5">
			<Card.Body>
				<AddDepartmentForm onSubmit={console.log}/>
			</Card.Body>

			<Card.Footer>
				<Row className="justify-content-between p-2">
					<BackButton/>
					<Button variant="success">Создать</Button>
				</Row>
			</Card.Footer>
		</Card>
	</>
);

export default AddDepartmentPage;
