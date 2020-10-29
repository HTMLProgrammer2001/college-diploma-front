import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../redux';
import {ICommission} from '../../../interfaces/models/ICommission';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import findSortRule from '../../../utils/helpers/findSortRule';
import CommissionItem from './CommissionItem';
import {selectAllCommissionsState} from '../../../redux/commissions/all/selectors';
import {selectDeleteCommissions} from '../../../redux/commissions/delete/selectors';
import {allCommissionsChangeSort} from '../../../redux/commissions/all/actions';
import thunkAllCommissions from '../../../redux/commissions/all/thunks';
import thunkDeleteCommission from '../../../redux/commissions/delete/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectAllCommissionsState(state),
	deleting: selectDeleteCommissions(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string){
		dispatch(allCommissionsChangeSort(field));
		dispatch(thunkAllCommissions(1));
	},
	load(page = 1){
		dispatch(thunkAllCommissions(page));
	},
	deleteItem(id: number){
		dispatch(thunkDeleteCommission(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type ICommissionsTableProps = ConnectedProps<typeof connected>;
const CommissionsTable: React.FC<ICommissionsTableProps> = (props) => {
	useEffect(() => {
		if(!props.isLoading && !props.commissions.length)
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
				!props.isLoading && !props.error && !props.commissions.length &&
				<tr className="font-weight-bold text-center">
					<th colSpan={3} className="text-center">
						Нет отделений подходящих под этот фильтр
					</th>
				</tr>
			}

			{
				!props.isLoading && !props.error &&
				 props.commissions.map((commission: ICommission) => (
					<CommissionItem
						key={commission.id}
						commission={commission}
						isDeleting={props.deleting.findIndex((id) => id == commission.id) == -1}
						del={props.deleteItem}
					/>
 				))
			}
			</tbody>
		</Table>
	);
};

export default connected(CommissionsTable);
