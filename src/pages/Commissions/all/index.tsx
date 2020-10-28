import React from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../redux';

import BackButton from '../../../common/BackButton';
import CommissionsFilterForm from './CommissionsFilterForm';
import CommissionsTable from './CommissionsTable';
import Paginator from '../../../common/Paginator';
import {selectAllCommissionsPagination} from '../../../redux/commissions/all/selectors';
import thunkAllCommissions from '../../../redux/commissions/all/thunks';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllCommissionsPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllCommissions});

type IAllDepartmentsPageProps = ConnectedProps<typeof connected>;
const AllDepartmentsPage: React.FC<IAllDepartmentsPageProps> = ({changePage, paginator}) => (
	<>
		<div className="title">Цикловые комиссии</div>

		<Card className="mr-5">
			<Card.Body>
				<Row className="justify-content-between px-2 mb-3">
					<Link to="/commissions/add">
						<Button variant="success">Добавить</Button>
					</Link>

					<CommissionsFilterForm onSubmit={() => changePage(1)}/>
				</Row>

				<CommissionsTable/>

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
