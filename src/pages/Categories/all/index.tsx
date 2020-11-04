import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';

import BackButton from '../../../common/BackButton';
import CommissionsFilterForm from './CommissionsFilterForm';
import CommissionsTable from './CommissionsTable';
import Paginator from '../../../common/Paginator';
import {selectAllCommissionsPagination} from '../../../redux/commissions/all/selectors';
import thunkAllCommissions from '../../../redux/commissions/all/thunks';
import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllCommissionsPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllCommissions});

type IAllDepartmentsPageProps = ConnectedProps<typeof connected>;
const AllDepartmentsPage: React.FC<IAllDepartmentsPageProps> = ({changePage, paginator}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('commissions.all.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('commissions.name')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<div className="model__filter-form">
						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/commissions/add">
									<Button variant="success">
										{t('common.add')}
									</Button>
								</Link>
							</UserCan>
						</div>

						<CommissionsFilterForm onSubmit={() => changePage(1)}/>
					</div>

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
};

export default connected(AllDepartmentsPage);
