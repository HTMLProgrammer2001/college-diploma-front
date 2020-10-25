import React from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../../redux';
import EducationsFilterForm from './EducationsFilterForm';
import EducationsTable from './EducationsTable';
import Paginator from '../../../../common/Paginator';
import {selectProfileEducationsPagination} from '../../../../redux/profile/educations/selectors';
import thunkProfileEducations from '../../../../redux/profile/educations/thunks';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfileEducationsPagination(state)
});

const connected = connect(mapStateToProps, {
	changePage: thunkProfileEducations
});

type IEducationsTabProps = ConnectedProps<typeof connected>;

const EducationsTab: React.FC<IEducationsTabProps> = ({paginator, changePage}) => (
	<div className="mt-5">
		<Container>
			<EducationsFilterForm onSubmit={() => changePage(1)}/>
			<EducationsTable/>

			<div className="d-flex my-3 justify-content-end">
				<Paginator {...paginator} setCur={changePage}/>
			</div>
		</Container>
	</div>
);

export default connected(EducationsTab);
