import React from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import InternshipsFilterForm from './InternshipsFilterForm';
import InternshipsTable from './InternshipsTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {
	selectProfileInternshipsPagination,
	selectProfileInternshipsState
} from '../../../../redux/profile/internships/selectors';
import thunkProfileInternships from '../../../../redux/profile/internships/thunks';


const mapStateToProps = (state: RootState) => ({
	paginator: selectProfileInternshipsPagination(state),
	hours: selectProfileInternshipsState(state).hours
});

const connected = connect(mapStateToProps, {changePage: thunkProfileInternships});

type IInternshipsTabProps = ConnectedProps<typeof connected>;

const InternshipsTab: React.FC<IInternshipsTabProps> = ({paginator, hours, changePage}) => (
	<div className="mt-5">
		<Container>
			<InternshipsFilterForm onSubmit={() => changePage(1)}/>
			<InternshipsTable/>

			<div className="d-flex my-3 justify-content-end">
				<Paginator {...paginator} setCur={changePage}/>
			</div>

			<b>Часов с последнего повышения квалификации: {hours}</b>
		</Container>
	</div>
);

export default connected(InternshipsTab);
