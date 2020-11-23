import React, {useContext, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router';
import qs from 'querystring';

import {RootState} from '../../../../redux';
import {IInternship} from '../../../../interfaces/models/IInternship';
import {selectProfileInternshipsState} from '../../../../redux/profile/internships/selectors';
import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import thunkProfileInternships from '../../../../redux/profile/internships/thunks';
import findSortRule from '../../../../utils/helpers/findSortRule';
import {profileInternshipsChangeSort} from '../../../../redux/profile/internships/actions';
import InternshipItem from './InternshipItem';
import UserProfileContext from '../../../../utils/contexts/UserProfileContext';


const mapStateToProps = (state: RootState) => ({
	...selectProfileInternshipsState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(userID: number, field: string) {
		dispatch(profileInternshipsChangeSort(field));
		dispatch(thunkProfileInternships(userID, 1));
	},
	load(userID: number, page = 1) {
		dispatch(thunkProfileInternships(userID, page));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IInternshipsTableProps = ConnectedProps<typeof connected>;
const InternshipsTable: React.FC<IInternshipsTableProps> = (props) => {
	const {user} = useContext(UserProfileContext),
		  location = useLocation(),
		  {t} = useTranslation(),
		  changeSortWrapper = (field: string) => {
			  props.changeSort(user.id, field);
		  };

	useEffect(() => {
		//parse QP
		const q = qs.parse(location.search.slice(1));

		//load internships
		if (!props.isLoading)
			props.load(+user.id, q.page && location.hash == '#internships' ? +q.page : 1);
	}, []);

	return (
		<div className="table-wrapper">
			<Table striped bordered hover style={{minWidth: '850px'}}>
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
						{t('profile.tabs.internships.category')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'category')?.direction}
							change={changeSortWrapper}
							param="category"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.internships.theme')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'theme')?.direction}
							change={changeSortWrapper}
							param="theme"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.internships.hoursCount')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'hours')?.direction}
							change={changeSortWrapper}
							param="hours"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.internships.endDate')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'to')?.direction}
							change={changeSortWrapper}
							param="to"
						/>
					</th>

					<th>Действия</th>
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
					!props.isLoading && !props.error && !props.internships.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={6} className="text-center">
							{t('common.noItems', {what: 'стажировок'})}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.internships.map((internship: IInternship) => (
						<InternshipItem internship={internship} key={internship.id}/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(InternshipsTable);
