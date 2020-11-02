import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';

import BackButton from '../../../common/BackButton';
import PublicationsFilterForm from './PublicationsFilterForm';
import PublicationsTable from './PublicationsTable';
import Paginator from '../../../common/Paginator';
import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import {selectAllPublicationsPagination} from '../../../redux/publications/all/selectors';
import thunkAllPublications from '../../../redux/publications/all/thunks';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllPublicationsPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllPublications});

type IAllPublicationsPageProps = ConnectedProps<typeof connected>;
const AllPublicationsPage: React.FC<IAllPublicationsPageProps> = ({changePage, paginator}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('publications.all.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('publications.name')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<div className="model__filter-form">
						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/publications/add">
									<Button variant="success">
										{t('common.add')}
									</Button>
								</Link>
							</UserCan>
						</div>

						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/publications/import">
									<Button variant="primary">
										{t('common.import')}
									</Button>
								</Link>
							</UserCan>
						</div>
					</div>

					<PublicationsFilterForm onSubmit={() => changePage(1)}/>

					<div className="d-flex justify-content-center w-100">
						<PublicationsTable/>
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

export default connected(AllPublicationsPage);
