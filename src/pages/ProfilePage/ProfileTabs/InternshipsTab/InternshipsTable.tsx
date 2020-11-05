import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

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


const mapStateToProps = (state: RootState) => ({
	...selectProfileInternshipsState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(profileInternshipsChangeSort(field));
		dispatch(thunkProfileInternships(1));
	},
	load(page = 1) {
		dispatch(thunkProfileInternships(page));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IInternshipsTableProps = ConnectedProps<typeof connected>;
const InternshipsTable: React.FC<IInternshipsTableProps> = (props) => {
	useEffect(() => {
		if (!props.isLoading && !props.internships.length)
			props.load();
	}, []);

	const {t} = useTranslation();

	return (
		<div className="table-wrapper">
			<Table striped bordered hover style={{minWidth: '850px'}}>
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
						{t('profile.tabs.internships.category')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'category')?.direction}
							change={props.changeSort}
							param="category"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.internships.theme')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'theme')?.direction}
							change={props.changeSort}
							param="theme"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.internships.hoursCount')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'hours')?.direction}
							change={props.changeSort}
							param="hours"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.internships.endDate')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'to')?.direction}
							change={props.changeSort}
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