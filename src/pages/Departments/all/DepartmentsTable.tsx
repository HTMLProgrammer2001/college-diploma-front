import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

import {RootState} from '../../../redux';
import {IDepartment} from '../../../interfaces/models/IDepartment';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader';
import ErrorElement from '../../../common/ErrorElement';
import {selectProfileEducationsState} from '../../../redux/profile/educations/selectors';
import findSortRule from '../../../utils/helpers/findSortRule';


const mapStateToProps = (state: RootState) => ({
	...selectProfileEducationsState(state),
	educations: [{id: 1, name: 'Test'}]
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string){},
	load(page = 1){}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IDepartmentsTableProps = ConnectedProps<typeof connected>;
const DepartmentsTable: React.FC<IDepartmentsTableProps> = (props) => {
	useEffect(() => {
		if(!props.isLoading && !props.educations.length)
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
					<span className="pull-left">Название</span>

					<SortItem
						state={findSortRule(props.sort, 'name')?.direction}
						change={props.changeSort}
						param="name"
					/>
				</th>

				<th>Действия</th>
			</tr>
			</thead>
			<tbody>
			{
				props.isLoading &&
				<tr>
					<th colSpan={3} className="text-center">
						<Loader/>
					</th>
				</tr>
			}

			{
				props.error &&
				<tr className="text-center text-danger">
					<th colSpan={3} className="text-center">
						<ErrorElement error={props.error}/>
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error && !props.educations.length &&
				<tr className="font-weight-bold text-center">
					<th colSpan={3} className="text-center">
						Нет отделений подходящих под этот фильтр
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error &&
				(props.educations as any).map((department: IDepartment) => (
					<tr key={department.id}>
						<th>{department.id}</th>
						<th>{department.name}</th>
						<th>
							<Link to={`/departments/${department.id}/edit`}>
								<i className="fa fa-pencil"/>
							</Link>

							<Link to="#">
								<i className="fa fa-close"/>
							</Link>
						</th>
					</tr>
				))
			}
			</tbody>
		</Table>
	);
};

export default connected(DepartmentsTable);
