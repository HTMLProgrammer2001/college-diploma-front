import React from 'react';
import {Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import QualificationsFilterForm from './QualificationsFilterForm';
import QualificationsTable from './QualificationsTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {selectPublicationsPagination} from '../../../../redux/publications/show/selectors';


const mapStateToProps = (state: RootState) => ({
	paginator: selectPublicationsPagination(state)
});

const connected = connect(mapStateToProps);

type IInternshipsTabProps = ConnectedProps<typeof connected>;

const QualificationsTab: React.FC<IInternshipsTabProps> = ({paginator}) => (
	<div className="mt-3">
		<h3>Квалификации</h3>

		<Container>
			<QualificationsFilterForm onSubmit={console.log}/>
			<QualificationsTable/>

			<div className="d-flex my-3 justify-content-end">
				<Paginator {...paginator} setCur={console.log}/>
			</div>
		</Container>
	</div>
);

export default connected(QualificationsTab);
