import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {compose} from 'redux';

import {RootState} from '../../../redux';

import BackButton from '../../../common/BackButton';
import Paginator from '../../../common/Paginator';
import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import {selectAllEducationsPagination} from '../../../redux/educations/all/selectors';
import thunkAllEducations from '../../../redux/educations/all/thunks';
import EducationsFilterForm from './EducationsFilterForm';
import EducationsTable from './EducationsTable';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllEducationsPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllEducations});

type IAllEducationsPageProps = ConnectedProps<typeof connected>;
const AllEducationsPage: React.FC<IAllEducationsPageProps> = ({changePage, paginator}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('educations.all.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('educations.name')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<div className="model__filter-form">
						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/educations/add">
									<Button variant="success">
										{t('common.add')}
									</Button>
								</Link>
							</UserCan>
						</div>

						<div/>
					</div>

					<EducationsFilterForm onSubmit={() => changePage(1)}/>

					<div className="d-flex justify-content-center w-100">
						<EducationsTable/>
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

export default compose<React.FC<IAllEducationsPageProps>>(
	IsUserRoleMore(Roles.VIEWER, true),
	connected
)(AllEducationsPage);
