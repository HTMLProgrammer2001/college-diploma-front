import React from 'react';
import {Button, Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import PublicationsFilterForm from './PublicationsFilterForm';
import PublicationsTable from './PublicationsTable';
import Paginator from '../../../../common/Paginator';
import {RootState} from '../../../../redux';
import {selectPublicationsPagination} from '../../../../redux/publications/show/selectors';


const mapStateToProps = (state: RootState) => ({
	paginator: selectPublicationsPagination(state)
});

const connected = connect(mapStateToProps);

const PublicationsTab: React.FC<ConnectedProps<typeof connected>> = ({paginator}) => (
	<div className="mt-3">
		<h3>Публикации</h3>

		<Container>
			<PublicationsFilterForm onSubmit={console.log}/>
			<PublicationsTable/>

			<div className="d-flex my-3 justify-content-end">
				<Paginator {...paginator} setCur={console.log}/>
			</div>

			<Link to="/publications/import">
				<Button variant="success" className="mt-2">Импорт</Button>
			</Link>
		</Container>
	</div>
);

export default connected(PublicationsTab);