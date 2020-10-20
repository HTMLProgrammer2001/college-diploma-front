import React from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import cn from 'classnames';

import {RootState} from '../../../../redux';
import {selectPublicationsShowState} from '../../../../redux/publications/show/selectors';
import {IPublication} from '../../../../interfaces/IPublication';
import {publicationsShowChangeSort} from '../../../../redux/publications/show/actions';


const mapStateToProps = (state: RootState) => ({
	...selectPublicationsShowState(state)
});

const connected = connect(mapStateToProps, {
	changeSort: publicationsShowChangeSort
});

type IPublicationsTableProps = ConnectedProps<typeof connected>;
const PublicationsTable: React.FC<IPublicationsTableProps> = (props) => (
	<Table striped bordered hover>
		<thead>
		<tr>
			<th>
				<span className="pull-left">ID</span>
				<i className={cn("fa cur pull-right", {
					["fa-sort-amount-asc"]: props.sort.id == 1 || props.sort.id == undefined,
					["fa-sort-amount-desc"]: props.sort.id == -1,
					["opacity-5"]: props.sort.id == undefined,
				})}
				   onClick={() => props.changeSort('id')}
				/>
			</th>

			<th>
				<span className="pull-left">Название</span>
				<i className={cn("fa cur pull-right", {
						["fa-sort-amount-asc"]: props.sort.title == 1 || props.sort.title == undefined,
						["fa-sort-amount-desc"]: props.sort.title == -1,
						["opacity-5"]: props.sort.title == undefined,
					})}
				   onClick={() => props.changeSort('title')}
				/>
			</th>

			<th>Авторы</th>

			<th>
				<span className="pull-left">Дата публикации</span>
				<i className={cn("fa cur pull-right", {
					["fa-sort-amount-asc"]: props.sort.date == 1 || props.sort.date == undefined,
					["fa-sort-amount-desc"]: props.sort.date == -1,
					["opacity-5"]: props.sort.date == undefined,
				})}
				   onClick={() => props.changeSort('date')}
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
							Loading...
						</th>
					</tr>
			}

			{
				props.error &&
					<tr className="text-center text-danger">
						<th colSpan={5} className="text-center">
							Error
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

export default connected(PublicationsTable);
