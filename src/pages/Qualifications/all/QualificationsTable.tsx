import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import findSortRule from '../../../utils/helpers/findSortRule';
import QualificationItem from './QualificationItem';

import {selectAllQualificationsState} from '../../../redux/qualifications/all/selectors';
import {selectDeleteQualifications} from '../../../redux/qualifications/delete/selectors';
import thunkAllQualifications from '../../../redux/qualifications/all/thunks';
import {allQualificationsChangeSort} from '../../../redux/qualifications/all/actions';
import thunkDeleteQualification from '../../../redux/qualifications/delete/thunks';
import {IQualification} from '../../../interfaces/models/IQualification';


const mapStateToProps = (state: RootState) => ({
	...selectAllQualificationsState(state),
	deleting: selectDeleteQualifications(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allQualificationsChangeSort(field));
		dispatch(thunkAllQualifications(1));
	},
	load(page = 1) {
		dispatch(thunkAllQualifications(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteQualification(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IQualificationsTableProps = ConnectedProps<typeof connected>;
const QualificationsTable: React.FC<IQualificationsTableProps> = (props) => {
	useEffect(() => {
		if (!props.isLoading && !props.qualifications.length)
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
						{t('qualifications.all.user')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'user')?.direction}
							change={props.changeSort}
							param="user"
						/>
					</th>

					<th>
						<span className="pull-left">
							{t('qualifications.all.name')}
						</span>

						<SortItem
							state={findSortRule(props.sort, 'name')?.direction}
							change={props.changeSort}
							param="name"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('qualifications.all.date')}
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
					!props.isLoading && !props.error && !props.qualifications.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={7} className="text-center">
							{
								t('common.noItems', {
									what: t('qualifications.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.qualifications.map((qualification: IQualification) => (
						<QualificationItem
							key={qualification.id}
							qualification={qualification}
							isDeleting={props.deleting.findIndex((id: number) => id == qualification.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(QualificationsTable);
