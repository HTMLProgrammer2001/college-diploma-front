import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import {ICommission} from '../../../interfaces/models/ICommission';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import findSortRule from '../../../utils/helpers/findSortRule';
import RankItem from './RankItem';
import {selectAllRanksState} from '../../../redux/ranks/all/selectors';
import {selectDeleteRanks} from '../../../redux/ranks/delete/selectors';
import {allRanksChangeSort} from '../../../redux/ranks/all/actions';
import thunkAllRanks from '../../../redux/ranks/all/thunks';
import thunkDeleteRank from '../../../redux/ranks/delete/thunks';
import {IRank} from '../../../interfaces/models/IRank';


const mapStateToProps = (state: RootState) => ({
	...selectAllRanksState(state),
	deleting: selectDeleteRanks(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allRanksChangeSort(field));
		dispatch(thunkAllRanks(1));
	},
	load(page = 1) {
		dispatch(thunkAllRanks(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteRank(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type ICommissionsTableProps = ConnectedProps<typeof connected>;
const RanksTable: React.FC<ICommissionsTableProps> = (props) => {
	useEffect(() => {
		if (!props.isLoading && !props.ranks.length)
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
						{t('ranks.all.name')}
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
					!props.isLoading && !props.error && !props.ranks.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={3} className="text-center">
							{
								t('common.noItems', {
									what: t('ranks.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.ranks.map((rank: IRank) => (
						<RankItem
							key={rank.id}
							rank={rank}
							isDeleting={props.deleting.findIndex((id) => id == rank.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(RanksTable);
