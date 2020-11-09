import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';

import BackButton from '../../../common/BackButton';
import Paginator from '../../../common/Paginator';
import InternshipsFilterForm from './InternshipsFilterForm';
import InternshipsTable from './InternshipsTable';

import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import {selectAllInternshipsPagination} from '../../../redux/internships/all/selectors';
import thunkAllInternships from '../../../redux/internships/all/thunks';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllInternshipsPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllInternships});

type IAllInternshipsPageProps = ConnectedProps<typeof connected>;
const AllInternshipsPage: React.FC<IAllInternshipsPageProps> = ({changePage, paginator}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('internships.all.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('internships.name')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<div className="model__filter-form">
						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/internships/add">
									<Button variant="success">
										{t('common.add')}
									</Button>
								</Link>
							</UserCan>
						</div>

						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/internships/import">
									<Button variant="primary">
										{t('common.import')}
									</Button>
								</Link>
							</UserCan>
						</div>
					</div>

					<InternshipsFilterForm onSubmit={() => changePage(1)}/>

					<div className="d-flex justify-content-center w-100">
						<InternshipsTable/>
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

export default connected(AllInternshipsPage);
