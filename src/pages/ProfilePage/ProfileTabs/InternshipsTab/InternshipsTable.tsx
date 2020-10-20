import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {RootState} from '../../../../redux';
import {IInternship} from '../../../../interfaces/IInternship';
import {selectProfileInternshipsState} from '../../../../redux/profile/internships/selectors';
import {internshipsShowChangeSort} from '../../../../redux/internships/show/actions';
import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import thunkProfileInternships from '../../../../redux/profile/internships/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectProfileInternshipsState(state)
});

const connected = connect(mapStateToProps, {
	changeSort: internshipsShowChangeSort,
	load: thunkProfileInternships
});

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
					<SortItem state={props.sort.id} change={props.changeSort} param="id"/>
				</th>

				<th>
					<span className="pull-left">Категория</span>
					<SortItem state={props.sort.category} change={props.changeSort} param="category"/>
				</th>

				<th>
					<span className="pull-left">Тема</span>
					<SortItem state={props.sort.theme} change={props.changeSort} param="theme"/>
				</th>

				<th>
					<span className="pull-left">Количество часов</span>
					<SortItem state={props.sort.hours} change={props.changeSort} param="hours"/>
				</th>

				<th>
					<span className="pull-left">Дата окончания</span>
					<SortItem state={props.sort.end_date} change={props.changeSort} param="end_date"/>
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
						<th>{internship.user.fullName}</th>
						<th>{internship.category.name}</th>
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
