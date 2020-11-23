import React, {useContext} from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import RebukesFilterForm from './RebukesFilterForm';
import RebukesTable from './RebukesTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {selectProfileRebukesPagination} from '../../../../redux/profile/rebukes/selectors';
import thunkProfileRebukes from '../../../../redux/profile/rebukes/thunks';
import UserProfileContext from '../../../../utils/contexts/UserProfileContext';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfileRebukesPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkProfileRebukes});

type IRebukesTabProps = ConnectedProps<typeof connected>;

const RebukesTab: React.FC<IRebukesTabProps> = ({paginator, changePage}) => {
	const {user} = useContext(UserProfileContext),
		changePageWrapper = (page?: number) => {
			changePage(user.id, page);
		};

	return (
		<div className="mt-5">
			<Container>
				<RebukesFilterForm onSubmit={() => changePageWrapper(1)}/>
				<RebukesTable/>

				<div className="d-flex my-3 justify-content-end">
					<Paginator {...paginator} setCur={changePageWrapper}/>
				</div>
			</Container>
		</div>
	);
};

export default connected(RebukesTab);
