import React from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import BackButton from '../../../common/BackButton';
import DepartmentsFilterForm from './DepartmentsFilterForm';
import DepartmentsTable from './DepartmentsTable';
import Paginator from '../../../common/Paginator';


const AllDepartmentsPage: React.FC<{}> = () => (
	<>
		<div className="title">Отделения</div>

		<Card className="mr-5">
			<Card.Body>
				<Row className="justify-content-between px-2 mb-3">
					<Link to="/departments/add">
						<Button variant="success">Добавить</Button>
					</Link>

					<DepartmentsFilterForm onSubmit={console.log}/>
				</Row>

				<DepartmentsTable/>

				<div className="d-flex my-3 justify-content-end">
					<Paginator totalItems={10} curPage={1} pageSize={5} setCur={console.log}/>
				</div>
			</Card.Body>

			<Card.Footer>
				<Row className="justify-content-between p-2">
					<BackButton/>
				</Row>
			</Card.Footer>
		</Card>
	</>
);

export default AllDepartmentsPage;
