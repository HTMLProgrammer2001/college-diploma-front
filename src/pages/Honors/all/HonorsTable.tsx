import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import {IPublication} from '../../../interfaces/models/IPublication';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import findSortRule from '../../../utils/helpers/findSortRule';
import HonorItem from './HonorItem';
import {selectAllHonorsState} from '../../../redux/honors/all/selectors';
import {selectDeleteHonors} from '../../../redux/honors/delete/selectors';
import {allHonorsChangeSort} from '../../../redux/honors/all/actions';
import thunkAllHonors from '../../../redux/honors/all/thunks';
import thunkDeleteHonor from '../../../redux/honors/delete/thunks';
import {IHonor} from '../../../interfaces/models/IHonor';


const mapStateToProps = (state: RootState) => ({
	...selectAllHonorsState(state),
	deleting: selectDeleteHonors(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allHonorsChangeSort(field));
		dispatch(thunkAllHonors(1));
	},
	load(page = 1) {
		dispatch(thunkAllHonors(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteHonor(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IHonorsTableProps = ConnectedProps<typeof connected>;
const HonorsTable: React.FC<IHonorsTableProps> = (props) => {
	useEffect(() => {
		if (!props.isLoading && !props.honors.length)
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
						{t('honors.all.user')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'user')?.direction}
							change={props.changeSort}
							param="user"
						/>
					</th>

					<th>
						<span className="pull-left">
							{t('honors.all.title')}
						</span>

						<SortItem
							state={findSortRule(props.sort, 'title')?.direction}
							change={props.changeSort}
							param="title"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('honors.all.type')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'type')?.direction}
							change={props.changeSort}
							param="type"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('honors.all.date')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'date')?.direction}
							change={props.changeSort}
							param="date"
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
					!props.isLoading && !props.error && !props.honors.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={6} className="text-center">
							{
								t('common.noItems', {
									what: t('honors.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.honors.map((honor: IHonor) => (
						<HonorItem
							key={honor.id}
							honor={honor}
							isDeleting={props.deleting.findIndex((id: number) => id == honor.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(HonorsTable);
