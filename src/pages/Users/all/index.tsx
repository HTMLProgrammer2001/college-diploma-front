import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import BackButton from '../../../common/BackButton';
import UsersFilterForm from './UsersFilterForm';
import UsersTable from './UsersTable';
import Paginator from '../../../common/Paginator';
import UserCan from '../../../common/UserCan';
import UserModal from './Modal';

import {RootState} from '../../../redux';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import {selectAllUsersPagination} from '../../../redux/users/all/selectors';
import thunkAllUsers from '../../../redux/users/all/thunks';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllUsersPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllUsers});

type IAllDepartmentsPageProps = ConnectedProps<typeof connected>;
const AllDepartmentsPage: React.FC<IAllDepartmentsPageProps> = ({changePage, paginator}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('users.all.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('users.name')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<div className="model__filter-form">
						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/users/add">
									<Button variant="success">
										{t('common.add')}
									</Button>
								</Link>
							</UserCan>
						</div>

						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/users/import">
									<Button variant="primary" className="mr-1">
										{t('common.import')}
									</Button>
								</Link>

								<a href={`${process.env.REACT_APP_SERVER_URL}/report`} target="_blank">
									<Button variant="primary">
										{t('common.export')}
									</Button>
								</a>
							</UserCan>
						</div>
					</div>

					<div className="d-flex justify-content-center w-100 mb-3">
						<UsersFilterForm/>
					</div>

					<UsersTable/>

					<div className="d-flex my-3 justify-content-end">
						<Paginator {...paginator} setCur={changePage}/>
					</div>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>
					</Row>
				</Card.Footer>
				
				<UserModal/>
			</Card>
		</>
	);
};

export default connected(AllDepartmentsPage);
