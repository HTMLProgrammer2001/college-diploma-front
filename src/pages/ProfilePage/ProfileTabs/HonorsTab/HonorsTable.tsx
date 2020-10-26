import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {RootState} from '../../../../redux';
import {IHonor} from '../../../../interfaces/models/IHonor';

import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import {selectProfileHonorsState} from '../../../../redux/profile/honors/selectors';
import {profileHonorsChangeSort} from '../../../../redux/profile/honors/actions';
import thunkProfileHonors from '../../../../redux/profile/honors/thunks';
import findSortRule from '../../../../utils/helpers/findSortRule';


const mapStateToProps = (state: RootState) => ({
	...selectProfileHonorsState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string){
		dispatch(profileHonorsChangeSort(field));
		dispatch(thunkProfileHonors(1));
	},
	load(page = 1){
		dispatch(thunkProfileHonors(page));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

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

					<SortItem
						state={findSortRule(props.sort, 'ID')?.direction}
						change={props.changeSort}
						param="ID"
					/>
				</th>

				<th>
					<span className="pull-left">Название награды</span>

					<SortItem
						state={findSortRule(props.sort, 'title')?.direction}
						change={props.changeSort}
						param="title"
					/>
				</th>

				<th>
					<span className="pull-left">Тип награды</span>

					<SortItem
						state={findSortRule(props.sort, 'type')?.direction}
						change={props.changeSort}
						param="type"
					/>
				</th>

				<th>
					<span className="pull-left">Дата выдачи</span>

					<SortItem
						state={findSortRule(props.sort, 'date')?.direction}
						change={props.changeSort}
						param="date"
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
						<th>{honor.type || 'Тип не установлен'}</th>
						<th>{honor.datePresentation || 'Дата не установлена'}</th>
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
