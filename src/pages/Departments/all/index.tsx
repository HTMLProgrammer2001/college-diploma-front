import React from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../redux';

import BackButton from '../../../common/BackButton';
import DepartmentsFilterForm from './DepartmentsFilterForm';
import DepartmentsTable from './DepartmentsTable';
import Paginator from '../../../common/Paginator';
import thunkAllDepartments from '../../../redux/departments/all/thunks';
import {selectAllDepartmentsPagination} from '../../../redux/departments/all/selectors';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllDepartmentsPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllDepartments});

type IAllDepartmentsPageProps = ConnectedProps<typeof connected>;
const AllDepartmentsPage: React.FC<IAllDepartmentsPageProps> = ({changePage, paginator}) => (
	<>
		<div className="title">Отделения</div>

		<Card className="mr-5">
			<Card.Body>
				<Row className="justify-content-between px-2 mb-3">
					<Link to="/departments/add">
						<Button variant="success">Добавить</Button>
					</Link>

					<DepartmentsFilterForm onSubmit={() => changePage(1)}/>
				</Row>

				<DepartmentsTable/>

				<div className="d-flex my-3 justify-content-end">
					<Paginator {...paginator} setCur={changePage}/>
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

export default connected(AllDepartmentsPage);
