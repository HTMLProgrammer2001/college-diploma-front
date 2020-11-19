import React, {useContext} from 'react';
import {Button, Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import PublicationsFilterForm from './PublicationsFilterForm';
import PublicationsTable from './PublicationsTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {selectProfilePublicationsPagination} from '../../../../redux/profile/publications/selectors';
import thunkProfilePublications from '../../../../redux/profile/publications/thunks';
import {useTranslation} from 'react-i18next';
import UserProfileContext from '../../../../utils/contexts/UserProfileContext';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfilePublicationsPagination(state)
});

const connected = connect(mapStateToProps, {
	changePage: thunkProfilePublications
});

const PublicationsTab: React.FC<ConnectedProps<typeof connected>> = ({paginator, changePage}) => {
	const {t} = useTranslation(),
		{user} = useContext(UserProfileContext),
		changePageWrapper = (page: number) => {
			changePage(user.id, page);
		};

	return (
		<div className="mt-5">
			<Container>
				<PublicationsFilterForm onSubmit={() => changePageWrapper(1)}/>
				<PublicationsTable/>

				<div className="d-flex my-3 justify-content-end">
					<Paginator {...paginator} setCur={changePageWrapper}/>
				</div>

				<Link to="/publications/import">
					<Button variant="success" className="mt-2">
						{t('common.import')}
					</Button>
				</Link>
			</Container>
		</div>
	);
};

export default connected(PublicationsTab);
