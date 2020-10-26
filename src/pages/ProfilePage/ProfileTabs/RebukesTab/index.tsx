import React from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import RebukesFilterForm from './RebukesFilterForm';
import RebukesTable from './RebukesTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {selectProfileRebukesPagination} from '../../../../redux/profile/rebukes/selectors';
import thunkProfileRebukes from '../../../../redux/profile/rebukes/thunks';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfileRebukesPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkProfileRebukes});

type IRebukesTabProps = ConnectedProps<typeof connected>;

const RebukesTab: React.FC<IRebukesTabProps> = ({paginator, changePage}) => (
	<div className="mt-5">
		<Container>
			<RebukesFilterForm onSubmit={() => changePage(1)}/>
			<RebukesTable/>

			<div className="d-flex my-3 justify-content-end">
				<Paginator {...paginator} setCur={changePage}/>
			</div>
		</Container>
	</div>
);

export default connected(RebukesTab);
