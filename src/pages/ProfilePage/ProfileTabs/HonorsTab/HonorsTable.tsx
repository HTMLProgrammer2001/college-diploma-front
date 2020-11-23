import React, {useContext, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../../redux';
import {IHonor} from '../../../../interfaces/models/IHonor';

import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import {selectProfileHonorsState} from '../../../../redux/profile/honors/selectors';
import {profileHonorsChangeSort} from '../../../../redux/profile/honors/actions';
import thunkProfileHonors from '../../../../redux/profile/honors/thunks';
import findSortRule from '../../../../utils/helpers/findSortRule';
import HonorItem from './HonorItem';
import UserProfileContext from '../../../../utils/contexts/UserProfileContext';
import {useLocation} from 'react-router';
import * as queryString from 'querystring';


const mapStateToProps = (state: RootState) => ({
	...selectProfileHonorsState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(userID: number, field: string) {
		dispatch(profileHonorsChangeSort(field));
		dispatch(thunkProfileHonors(1));
	},
	load(userID: number, page = 1) {
		dispatch(thunkProfileHonors(userID, page));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IHonorsTableProps = ConnectedProps<typeof connected>;
const HonorsTable: React.FC<IHonorsTableProps> = (props) => {
	const {user} = useContext(UserProfileContext),
		location = useLocation(),
		{t} = useTranslation(),
		changeSortWrapper = (field: string) => {
			props.changeSort(user.id, field);
		};

	useEffect(() => {
		//parse QP
		const q = queryString.parse(location.search.slice(1));

		if (!props.isLoading)
			//load honors for current user with page in QP
			props.load(user.id, q.page && location.hash == '#honors' ? +q.page : 1);
	}, []);

	return (
		<div className="table-wrapper">
			<Table striped bordered hover className="table" style={{minWidth: '800px'}}>
				<thead>
				<tr>
					<th>
						<span className="pull-left">ID</span>

						<SortItem
							state={findSortRule(props.sort, 'ID')?.direction}
							change={changeSortWrapper}
							param="ID"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.honors.honorName')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'title')?.direction}
							change={changeSortWrapper}
							param="title"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.honors.presDate')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'date')?.direction}
							change={changeSortWrapper}
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
					!props.isLoading && !props.error && !props.honors.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={6} className="text-center">
							{t('common.noItems', {what: 'наград'})}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.honors.map((honor: IHonor) => (
						<HonorItem honor={honor} key={honor.id}/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(HonorsTable);
