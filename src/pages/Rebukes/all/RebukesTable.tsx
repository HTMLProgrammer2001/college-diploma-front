import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router';
import qs from 'querystring';

import {RootState} from '../../../redux';
import {IRebuke} from '../../../interfaces/models/IRebuke';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import RebukeItem from './RebukeItem';

import findSortRule from '../../../utils/helpers/findSortRule';
import {selectAllRebukesState} from '../../../redux/rebukes/all/selectors';
import {selectDeleteRebukes} from '../../../redux/rebukes/delete/selectors';
import {allRebukesChangeSort} from '../../../redux/rebukes/all/actions';
import thunkAllRebukes from '../../../redux/rebukes/all/thunks';
import thunkDeleteRebuke from '../../../redux/rebukes/delete/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectAllRebukesState(state),
	deleting: selectDeleteRebukes(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allRebukesChangeSort(field));
		dispatch(thunkAllRebukes(1));
	},
	load(page = 1) {
		dispatch(thunkAllRebukes(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteRebuke(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IRebukesTableProps = ConnectedProps<typeof connected>;
const RebukesTable: React.FC<IRebukesTableProps> = (props) => {
	const {t} = useTranslation(),
		location = useLocation();

	useEffect(() => {
		//get page from QP
		const q = qs.parse(location.search.slice(1));

		if (!props.isLoading && !props.rebukes.length)
			props.load(q.page ? +q.page : 1);
	}, []);

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
						{t('rebukes.all.user')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'user')?.direction}
							change={props.changeSort}
							param="user"
						/>
					</th>

					<th>
						<span className="pull-left">
							{t('rebukes.all.title')}
						</span>

						<SortItem
							state={findSortRule(props.sort, 'title')?.direction}
							change={props.changeSort}
							param="title"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('rebukes.all.date')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'datePresentation')?.direction}
							change={props.changeSort}
							param="datePresentation"
						/>
					</th>

					<th>{t('common.actions')}</th>
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
					!props.isLoading && !props.error && !props.rebukes.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={6} className="text-center">
							{
								t('common.noItems', {
									what: t('rebukes.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.rebukes.map((rebuke: IRebuke) => (
						<RebukeItem
							key={rebuke.id}
							rebuke={rebuke}
							isDeleting={props.deleting.findIndex((id: number) => id == rebuke.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(RebukesTable);
