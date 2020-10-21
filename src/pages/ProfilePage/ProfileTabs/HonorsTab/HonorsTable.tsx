import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {RootState} from '../../../../redux';
import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import {selectProfileHonorsState} from '../../../../redux/profile/honors/selectors';
import {profileHonorsChangeSort} from '../../../../redux/profile/honors/actions';
import thunkProfileHonors from '../../../../redux/profile/honors/thunks';
import {IHonor} from '../../../../interfaces/models/IHonor';


const mapStateToProps = (state: RootState) => ({
	...selectProfileHonorsState(state)
});

const connected = connect(mapStateToProps, {
	changeSort: profileHonorsChangeSort,
	load: thunkProfileHonors
});

type IInternshipsTableProps = ConnectedProps<typeof connected>;
const HonorsTable: React.FC<IInternshipsTableProps> = (props) => {
	useEffect(() => {
		if(!props.isLoading && !props.honors.length)
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
					<span className="pull-left">Название награды</span>
					<SortItem state={props.sort.title} change={props.changeSort} param="title"/>
				</th>

				<th>
					<span className="pull-left">Тип награды</span>
					<SortItem state={props.sort.type} change={props.changeSort} param="type"/>
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
				!props.isLoading && !props.error && !props.honors.length &&
				<tr className="font-weight-bold text-center">
					<th colSpan={6} className="text-center">
						Нет наград подходящих под этот фильтр
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error &&
				props.honors.map((honor: IHonor) => (
					<tr key={honor.id}>
						<th>{honor.id}</th>
						<th>{honor.title}</th>
						<th>{honor.type}</th>
						<th>{honor.date_presentation}</th>
						<th>
							<Link to={`/honors/${honor.id}`}>
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

export default connected(HonorsTable);
