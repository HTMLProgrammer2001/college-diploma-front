import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {RootState} from '../../../../redux';
import {IPublication} from '../../../../interfaces/models/IPublication';
import {selectProfilePublicationsState} from '../../../../redux/profile/publications/selectors';
import {profilePublicationsChangeSort} from '../../../../redux/profile/publications/actions';
import thunkProfilePublications from '../../../../redux/profile/publications/thunks';
import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader';
import ErrorElement from '../../../../common/ErrorElement';


const mapStateToProps = (state: RootState) => ({
	...selectProfilePublicationsState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	load(page: number = 1){
		dispatch(thunkProfilePublications(page));
	},
	changeSort(field: string){
		dispatch(profilePublicationsChangeSort(field));
		dispatch(thunkProfilePublications());
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IPublicationsTableProps = ConnectedProps<typeof connected>;
const PublicationsTable: React.FC<IPublicationsTableProps> = (props) => {
	useEffect(() => {
		if(!props.isLoading && !props.publications.length)
			props.load();
	}, []);

	return (
		<Table striped bordered hover>
			<thead>
			<tr>
				<th>
					<span className="pull-left">ID</span>

					<SortItem
						state={props.sort.sortId}
						change={props.changeSort}
						param="sortId"
					/>
				</th>

				<th>
					<span className="pull-left">Название</span>

					<SortItem
						state={props.sort.sortTitle}
						change={props.changeSort}
						param="sortTitle"
					/>
				</th>

				<th>Авторы</th>

				<th>
					<span className="pull-left">Дата публикации</span>

					<SortItem
						state={props.sort.sortDate}
						change={props.changeSort}
						param="sortDate"
					/>
				</th>

				<th>Действия</th>
			</tr>
			</thead>
			<tbody>
			{
				props.isLoading &&
				<tr>
					<th colSpan={5} className="text-center">
						<Loader/>
					</th>
				</tr>
			}

			{
				props.error &&
				<tr className="text-center text-danger">
					<th colSpan={5} className="text-center">
						<ErrorElement error={props.error}/>
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error && !props.publications.length &&
				<tr className="font-weight-bold text-center">
					<th colSpan={5} className="text-center">
						Нет публикаций подходящих под этот фильтр
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error &&
				props.publications.map((publication: IPublication) => (
					<tr key={publication.id}>
						<th>{publication.id}</th>
						<th>{publication.title}</th>
						<th>{publication.authors}</th>
						<th>{publication.date_of_publication}</th>
						<th>
							<Link to={`/publications/${publication.id}`}>
								<i className="fa fa-eye"/>
							</Link>
						</th>
					</tr>
				))
			}
			</tbody>
		</Table>
	);
};

export default connected(PublicationsTable);
