import React, {useContext, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../../redux';
import {IQualification} from '../../../../interfaces/models/IQualification';

import {selectProfileQualificationsState} from '../../../../redux/profile/qualifications/selectors';
import {profileQualificationsChangeSort} from '../../../../redux/profile/qualifications/actions';
import thunkProfileQualifications from '../../../../redux/profile/qualifications/thunks';
import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import findSortRule from '../../../../utils/helpers/findSortRule';
import QualificationItem from './QualificationItem';
import UserProfileContext from '../../../../utils/contexts/UserProfileContext';


const mapStateToProps = (state: RootState) => ({
	...selectProfileQualificationsState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(userID: number, field: string) {
		dispatch(profileQualificationsChangeSort(field));
		dispatch(thunkProfileQualifications(userID, 1));
	},
	load(userID: number, page = 1) {
		dispatch(thunkProfileQualifications(userID, page));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IQualificationsTableProps = ConnectedProps<typeof connected>;
const QualificationsTable: React.FC<IQualificationsTableProps> = (props) => {
	const {t} = useTranslation(),
		{user} = useContext(UserProfileContext),
		changeSortWrapper = (field: string) => {
			props.changeSort(user.id, field)
		};

	useEffect(() => {
		if (!props.isLoading)
			props.load(user.id);
	}, []);

	return (
		<div className="table-wrapper">
			<Table striped bordered hover style={{minWidth: '700px'}}>
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
						{t('profile.tabs.qualifications.category')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'category')?.direction}
							change={changeSortWrapper}
							param="category"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.qualifications.date')}
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
						<th colSpan={4} className="text-center">
							<Loader/>
						</th>
					</tr>
				}

				{
					props.error &&
					<tr className="text-center text-danger">
						<th colSpan={4} className="text-center">
							<ErrorElement error={props.error}/>
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error && !props.qualifications.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={4} className="text-center">
							{t('common.noItems', {what: 'повышений категорий'})}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.qualifications.map((qualification: IQualification) => (
						<QualificationItem qualification={qualification} key={qualification.id}/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(QualificationsTable);

