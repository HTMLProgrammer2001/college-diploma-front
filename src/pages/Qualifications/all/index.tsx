import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';

import BackButton from '../../../common/BackButton';
import Paginator from '../../../common/Paginator';
import QualificationsFilterForm from './QualificationsFilterForm';
import QualificationsTable from './QualificationsTable';

import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/RoleCodeToName';

import {selectAllQualificationsPagination} from '../../../redux/qualifications/all/selectors';
import thunkAllQualifications from '../../../redux/qualifications/all/thunks';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllQualificationsPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllQualifications});

type IAllQualificationsPageProps = ConnectedProps<typeof connected>;
const AllQualificationsPage: React.FC<IAllQualificationsPageProps> = ({changePage, paginator}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('qualifications.all.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('qualifications.name')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<div className="model__filter-form">
						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/qualifications/add">
									<Button variant="success">
										{t('common.add')}
									</Button>
								</Link>
							</UserCan>
						</div>

						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/qualifications/import">
									<Button variant="primary">
										{t('common.import')}
									</Button>
								</Link>
							</UserCan>
						</div>
					</div>

					<QualificationsFilterForm onSubmit={() => changePage(1)}/>

					<div className="d-flex justify-content-center w-100">
						<QualificationsTable/>
					</div>

					<div className="d-flex my-3 justify-content-end w-100">
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

export default connected(AllQualificationsPage);
