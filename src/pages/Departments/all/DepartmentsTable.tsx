import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';
import qs from 'querystring';
import {useLocation} from 'react-router';

import {RootState} from '../../../redux';
import {IDepartment} from '../../../interfaces/models/IDepartment';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import findSortRule from '../../../utils/helpers/findSortRule';
import {selectAllDepartmentsState} from '../../../redux/departments/all/selectors';
import {allDepartmentsChangeSort} from '../../../redux/departments/all/actions';
import thunkAllDepartments from '../../../redux/departments/all/thunks';
import {selectDeleteDepartments} from '../../../redux/departments/delete/selectors';
import thunkDeleteDepartment from '../../../redux/departments/delete/thunks';
import DepartmentItem from './DepartmentItem';


const mapStateToProps = (state: RootState) => ({
	...selectAllDepartmentsState(state),
	deleting: selectDeleteDepartments(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allDepartmentsChangeSort(field));
		dispatch(thunkAllDepartments(1));
	},
	load(page = 1) {
		dispatch(thunkAllDepartments(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteDepartment(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IDepartmentsTableProps = ConnectedProps<typeof connected>;
const DepartmentsTable: React.FC<IDepartmentsTableProps> = (props) => {
	const {t} = useTranslation(),
		location = useLocation();

	useEffect(() => {
		//load with page in QP
		const q = qs.parse(location.search.slice(1));

		if (!props.isLoading && !props.departments.length)
			props.load(q.page ? +q.page : 1);
	}, []);

	return (
		<div className="table-wrapper">
			<Table striped bordered hover style={{minWidth: '600px'}}>
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
					<span className="pull-left">
						{t('departments.all.name')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'name')?.direction}
							change={props.changeSort}
							param="name"
						/>
					</th>

					<th>{t('common.actions')}</th>
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
					!props.isLoading && !props.error && !props.departments.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={3} className="text-center">
							{
								t('common.noItems', {
									what: t('departments.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.departments.map((department: IDepartment) => (
						<DepartmentItem
							key={department.id}
							department={department}
							isDeleting={props.deleting.findIndex((id) => id == department.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(DepartmentsTable);
