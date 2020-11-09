import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import findSortRule from '../../../utils/helpers/findSortRule';
import InternshipItem from './InternshipItem';

import {selectAllInternshipsState} from '../../../redux/internships/all/selectors';
import {selectDeleteInternships} from '../../../redux/internships/delete/selectors';
import {allInternshipsChangeSort} from '../../../redux/internships/all/actions';
import thunkAllInternships from '../../../redux/internships/all/thunks';
import thunkDeleteInternship from '../../../redux/internships/delete/thunks';
import {IInternship} from '../../../interfaces/models/IInternship';


const mapStateToProps = (state: RootState) => ({
	...selectAllInternshipsState(state),
	deleting: selectDeleteInternships(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allInternshipsChangeSort(field));
		dispatch(thunkAllInternships(1));
	},
	load(page = 1) {
		dispatch(thunkAllInternships(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteInternship(id));
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
						{t('internships.all.user')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'user')?.direction}
							change={props.changeSort}
							param="user"
						/>
					</th>

					<th>
						<span className="pull-left">
							{t('internships.all.category')}
						</span>

						<SortItem
							state={findSortRule(props.sort, 'category')?.direction}
							change={props.changeSort}
							param="category"
						/>
					</th>

					<th>
						<span className="pull-left">
							{t('internships.all.title')}
						</span>

						<SortItem
							state={findSortRule(props.sort, 'title')?.direction}
							change={props.changeSort}
							param="title"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('internships.all.hours')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'hours')?.direction}
							change={props.changeSort}
							param="hours"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('internships.all.to')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'to')?.direction}
							change={props.changeSort}
							param="to"
						/>
					</th>

					<th>{t('common.actions')}</th>
				</tr>
				</thead>
				<tbody>
				{
					props.isLoading &&
					<tr>
						<th colSpan={7} className="text-center">
							<Loader/>
						</th>
					</tr>
				}

				{
					props.error &&
					<tr className="text-center text-danger">
						<th colSpan={7} className="text-center">
							<ErrorElement error={props.error}/>
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error && !props.internships.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={7} className="text-center">
							{
								t('common.noItems', {
									what: t('internships.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.internships.map((internship: IInternship) => (
						<InternshipItem
							key={internship.id}
							internship={internship}
							isDeleting={props.deleting.findIndex((id: number) => id == internship.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(InternshipsTable);
