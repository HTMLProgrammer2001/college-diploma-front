import React from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import HonorsFilterForm from './HonorsFilterForm';
import HonorsTable from './HonorsTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {selectProfileInternshipsPagination} from '../../../../redux/profile/internships/selectors';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfileInternshipsPagination(state)
});

const connected = connect(mapStateToProps);

type IHonorsTabProps = ConnectedProps<typeof connected>;

const HonorsTab: React.FC<IHonorsTabProps> = ({paginator}) => (
	<div className="mt-5">
		<Container>
			<HonorsFilterForm onSubmit={console.log}/>
			<HonorsTable/>

			<div className="d-flex my-3 justify-content-end">
				<Paginator {...paginator} setCur={console.log}/>
			</div>
		</Container>
	</div>
);

export default connected(HonorsTab);
