import React from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import EducationsFilterForm from './EducationsFilterForm';
import EducationsTable from './EducationsTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {selectProfileEducationsPagination} from '../../../../redux/profile/educations/selectors';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfileEducationsPagination(state)
});

const connected = connect(mapStateToProps);

type IEducationsTabProps = ConnectedProps<typeof connected>;

const EducationsTab: React.FC<IEducationsTabProps> = ({paginator}) => (
	<div className="mt-5">
		<Container>
			<EducationsFilterForm onSubmit={console.log}/>
			<EducationsTable/>

			<div className="d-flex my-3 justify-content-end">
				<Paginator {...paginator} setCur={console.log}/>
			</div>
		</Container>
	</div>
);

export default connected(EducationsTab);
