import React, {useContext} from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import InternshipsFilterForm from './InternshipsFilterForm';
import InternshipsTable from './InternshipsTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {
	selectProfileInternshipsPagination,
	selectProfileInternshipsState
} from '../../../../redux/profile/internships/selectors';
import thunkProfileInternships from '../../../../redux/profile/internships/thunks';
import UserProfileContext from '../../../../utils/contexts/UserProfileContext';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfileInternshipsPagination(state),
	hours: selectProfileInternshipsState(state).hours
});

const connected = connect(mapStateToProps, {changePage: thunkProfileInternships});

type IInternshipsTabProps = ConnectedProps<typeof connected>;

const InternshipsTab: React.FC<IInternshipsTabProps> = ({paginator, hours, changePage}) => {
	const {user} = useContext(UserProfileContext),
		  {t} = useTranslation();

	const changePageWrapper = (page?: number) => {
		changePage(user.id, page);
	};

	return (
		<div className="mt-5">
			<Container>
				<InternshipsFilterForm onSubmit={() => changePageWrapper(1)}/>
				<InternshipsTable/>

				<div className="d-flex my-3 justify-content-end">
					<Paginator {...paginator} setCur={changePageWrapper}/>
				</div>

				<b>{t('profile.tabs.internships.hoursFromLast', {hours})}</b>
			</Container>
		</div>
	);
};

export default connected(InternshipsTab);
