import React from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import HonorsFilterForm from './HonorsFilterForm';
import HonorsTable from './HonorsTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {selectProfileHonorsPagination} from '../../../../redux/profile/honors/selectors';
import thunkProfileHonors from '../../../../redux/profile/honors/thunks';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfileHonorsPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkProfileHonors});

type IHonorsTabProps = ConnectedProps<typeof connected>;

const HonorsTab: React.FC<IHonorsTabProps> = ({paginator, changePage}) => (
	<div className="mt-5">
		<Container>
			<HonorsFilterForm onSubmit={() => changePage(1)}/>
			<HonorsTable/>

			<div className="d-flex my-3 justify-content-end">
				<Paginator {...paginator} setCur={changePage}/>
			</div>
		</Container>
	</div>
);

export default connected(HonorsTab);
