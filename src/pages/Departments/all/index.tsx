import React from 'react';
import {Card, Row} from 'react-bootstrap';

import BackButton from '../../../common/BackButton';


const AllDepartmentsPage: React.FC<{}> = () => (
	<>
		<div className="title">Отделения</div>

		<Card className="mr-5">
			<Card.Body>
				<div>Card body</div>
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
