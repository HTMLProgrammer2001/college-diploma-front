import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {RootState} from '../../../../redux';
import {IInternship} from '../../../../interfaces/models/IInternship';
import {selectProfileInternshipsState} from '../../../../redux/profile/internships/selectors';
import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import thunkProfileInternships from '../../../../redux/profile/internships/thunks';
import findSortRule from '../../../../utils/helpers/findSortRule';
import {profileInternshipsChangeSort} from '../../../../redux/profile/internships/actions';


const mapStateToProps = (state: RootState) => ({
	...selectProfileInternshipsState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string){
		dispatch(profileInternshipsChangeSort(field));
		dispatch(thunkProfileInternships(1));
	},
	load(page = 1){
		dispatch(thunkProfileInternships(page));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IInternshipsTableProps = ConnectedProps<typeof connected>;
const InternshipsTable: React.FC<IInternshipsTableProps> = (props) => {
	useEffect(() => {
		if(!props.isLoading && !props.internships.length)
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
					<span className="pull-left">Категория</span>

					<SortItem
						state={findSortRule(props.sort, 'category')?.direction}
						change={props.changeSort}
						param="category"
					/>
				</th>

				<th>
					<span className="pull-left">Тема</span>

					<SortItem
						state={findSortRule(props.sort, 'theme')?.direction}
						change={props.changeSort}
						param="theme"
					/>
				</th>

				<th>
					<span className="pull-left">Количество часов</span>

					<SortItem
						state={findSortRule(props.sort, 'hours')?.direction}
						change={props.changeSort}
						param="hours"
					/>
				</th>

				<th>
					<span className="pull-left">Дата окончания</span>

					<SortItem
						state={findSortRule(props.sort, 'to')?.direction}
						change={props.changeSort}
						param="to"
					/>
				</th>

				<th>Действия</th>
			</tr>
			</thead>
			<tbody>
			{
				props.isLoading &&
				<tr>
					<th colSpan={6} className="text-center">
						<Loader/>
					</th>
				</tr>
			}

			{
				props.error &&
				<tr className="text-center text-danger">
					<th colSpan={6} className="text-center">
						<ErrorElement error={props.error}/>
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error && !props.internships.length &&
				<tr className="font-weight-bold text-center">
					<th colSpan={6} className="text-center">
						Нет стажировок подходящих под этот фильтр
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error &&
				props.internships.map((internship: IInternship) => (
					<tr key={internship.id}>
						<th>{internship.id}</th>
						<th>{internship.category?.name}</th>
						<th>{internship.title}</th>
						<th>{internship.hours}</th>
						<th>{internship.to}</th>
						<th>
							<Link to={`/internships/${internship.id}`}>
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

export default connected(InternshipsTable);
