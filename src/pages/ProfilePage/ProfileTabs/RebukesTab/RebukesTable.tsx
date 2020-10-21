import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {RootState} from '../../../../redux';
import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import {selectProfileRebukesState} from '../../../../redux/profile/rebukes/selectors';
import {profileRebukesChangeSort} from '../../../../redux/profile/rebukes/actions';
import thunkProfileRebukes from '../../../../redux/profile/rebukes/thunks';
import {IRebuke} from '../../../../interfaces/IRebuke';


const mapStateToProps = (state: RootState) => ({
	...selectProfileRebukesState(state)
});

const connected = connect(mapStateToProps, {
	changeSort: profileRebukesChangeSort,
	load: thunkProfileRebukes
});

type IRebukesTableProps = ConnectedProps<typeof connected>;
const RebukesTable: React.FC<IRebukesTableProps> = (props) => {
	useEffect(() => {
		if(!props.isLoading && !props.rebukes.length)
			props.load();
	}, []);

	return (
		<Table striped bordered hover>
			<thead>
			<tr>
				<th>
					<span className="pull-left">ID</span>
					<SortItem state={props.sort.id} change={props.changeSort} param="id"/>
				</th>

				<th>
					<span className="pull-left">Название выговора</span>
					<SortItem state={props.sort.title} change={props.changeSort} param="title"/>
				</th>

				<th>
					<span className="pull-left">Дата выдачи</span>

					<SortItem
						state={props.sort.presentation_date}
						change={props.changeSort}
						param="presentation_date"
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
				!props.isLoading && !props.error && !props.rebukes.length &&
				<tr className="font-weight-bold text-center">
					<th colSpan={6} className="text-center">
						Нет наград подходящих под этот фильтр
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error &&
				props.rebukes.map((rebuke: IRebuke) => (
					<tr key={rebuke.id}>
						<th>{rebuke.id}</th>
						<th>{rebuke.title}</th>
						<th>{rebuke.date_presentation}</th>
						<th>
							<Link to={`/rebukes/${rebuke.id}`}>
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

export default connected(RebukesTable);
