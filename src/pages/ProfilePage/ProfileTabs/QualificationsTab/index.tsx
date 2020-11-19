import React, {useContext} from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import QualificationsFilterForm from './QualificationsFilterForm';
import QualificationsTable from './QualificationsTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {
	selectProfileQualificationsPagination,
	selectProfileQualificationsState
} from '../../../../redux/profile/qualifications/selectors';
import thunkProfileQualifications from '../../../../redux/profile/qualifications/thunks';
import UserProfileContext from '../../../../utils/contexts/UserProfileContext';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfileQualificationsPagination(state),
	nextDate: selectProfileQualificationsState(state).nextDate
});

const connected = connect(mapStateToProps, {changePage: thunkProfileQualifications});

type IQualificationsTabProps = ConnectedProps<typeof connected>;

const QualificationsTab: React.FC<IQualificationsTabProps> = ({paginator, nextDate, changePage}) => {
	const {t} = useTranslation(),
		 {user} = useContext(UserProfileContext),
		 changePageWrapper = (page?: number) => {
			changePage(user.id, page);
		 };

	return (
		<div className="mt-5">
			<Container>
				<QualificationsFilterForm onSubmit={() => changePageWrapper(1)}/>
				<QualificationsTable/>

				<div className="d-flex my-3 justify-content-end">
					<Paginator {...paginator} setCur={changePageWrapper}/>
				</div>

				<div className="mt-2">
					<b>{t('profile.tabs.qualifications.nextDate', {nextDate})}</b>
				</div>
			</Container>
		</div>
	);
};

export default connected(QualificationsTab);
