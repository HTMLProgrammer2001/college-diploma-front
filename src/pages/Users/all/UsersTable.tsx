import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import {IUser} from '../../../interfaces/models/IUser';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import UserItem from './UserItem';

import findSortRule from '../../../utils/helpers/findSortRule';
import {selectAllCommissionsState} from '../../../redux/commissions/all/selectors';
import {selectDeleteCommissions} from '../../../redux/commissions/delete/selectors';
import {allCommissionsChangeSort} from '../../../redux/commissions/all/actions';
import thunkAllCommissions from '../../../redux/commissions/all/thunks';
import thunkDeleteCommission from '../../../redux/commissions/delete/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectAllCommissionsState(state),
	deleting: selectDeleteCommissions(state),
	users: [{id: 1, fullName: 'Test name', email: 'cssuperpy@gmail.com', avatar: 'http://localhost:8000/storage//avatars/l7viRhFR76YpfqfvD3f9vZZAUSySNFiRRRPHpPyr.jpeg'}] as IUser[]
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allCommissionsChangeSort(field));
		dispatch(thunkAllCommissions(1));
	},
	load(page = 1) {
		dispatch(thunkAllCommissions(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteCommission(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type ICommissionsTableProps = ConnectedProps<typeof connected>;
const UsersTable: React.FC<ICommissionsTableProps> = (props) => {
	useEffect(() => {
		if (!props.isLoading && !props.users.length)
			props.load();
	}, []);

	const {t} = useTranslation();

	return (
		<div className="table-wrapper">
			<Table striped bordered hover style={{minWidth: "600px"}}>
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
						{t('users.all.name')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'name')?.direction}
							change={props.changeSort}
							param="name"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('users.all.email')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'email')?.direction}
							change={props.changeSort}
							param="email"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('users.all.avatar')}
					</span>
					</th>

					<th>{t('common.actions')}</th>
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
					!props.isLoading && !props.error && !props.users.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={5} className="text-center">
							{
								t('common.noItems', {
									what: t('users.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.users.map((user: any) => (
						<UserItem
							key={user.id}
							user={user}
							isDeleting={props.deleting.findIndex((id) => id == user.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(UsersTable);
