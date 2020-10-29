import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../../redux';
import {IRebuke} from '../../../../interfaces/models/IRebuke';

import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import {selectProfileRebukesState} from '../../../../redux/profile/rebukes/selectors';
import {profileRebukesChangeSort} from '../../../../redux/profile/rebukes/actions';
import thunkProfileRebukes from '../../../../redux/profile/rebukes/thunks';
import findSortRule from '../../../../utils/helpers/findSortRule';
import RebukeItem from './RebukeItem';


const mapStateToProps = (state: RootState) => ({
	...selectProfileRebukesState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(profileRebukesChangeSort(field));
		dispatch(thunkProfileRebukes(1));
	},
	load(page = 1) {
		dispatch(thunkProfileRebukes(page));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IRebukesTableProps = ConnectedProps<typeof connected>;
const RebukesTable: React.FC<IRebukesTableProps> = (props) => {
	useEffect(() => {
		if (!props.isLoading && !props.rebukes.length)
			props.load();
	}, []);

	const {t} = useTranslation();

	return (
		<div className="table-wrapper">
			<Table striped bordered hover style={{minWidth: '700px'}}>
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
						{t('profile.tabs.rebukes.rebukeName')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'title')?.direction}
							change={props.changeSort}
							param="title"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.rebukes.date')}
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
					!props.isLoading && !props.error && !props.rebukes.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={6} className="text-center">
							{t('common.noItems', {what: 'выговоров'})}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.rebukes.map((rebuke: IRebuke) => (
						<RebukeItem rebuke={rebuke} key={rebuke.id}/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(RebukesTable);
