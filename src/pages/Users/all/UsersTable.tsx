import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import {IUserTable} from '../../../interfaces/models/IUserTable';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import UserItem from './UserItem';

import findSortRule from '../../../utils/helpers/findSortRule';
import {selectAllUsersState} from '../../../redux/users/all/selectors';
import {allUsersChangeSort} from '../../../redux/users/all/actions';
import {selectDeleteUsers} from '../../../redux/users/delete/selectors';
import thunkAllUsers from '../../../redux/users/all/thunks';
import thunkDeleteUser from '../../../redux/users/delete/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectAllUsersState(state),
	deleting: selectDeleteUsers(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allUsersChangeSort(field));
		dispatch(thunkAllUsers(1));
	},
	load(page = 1) {
		dispatch(thunkAllUsers(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteUser(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IUsersTableProps = ConnectedProps<typeof connected>;
const UsersTable: React.FC<IUsersTableProps> = (props) => {
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
					props.users.map((user: IUserTable) => (
						<UserItem
							key={user.id}
							user={user}
							isDeleting={props.deleting.findIndex((id: number) => id == user.id) == -1}
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
