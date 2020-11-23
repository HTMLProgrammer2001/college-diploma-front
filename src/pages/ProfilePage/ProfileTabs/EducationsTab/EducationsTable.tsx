import React, {useContext, useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';
import qs from 'querystring';

import {RootState} from '../../../../redux';
import {IEducation} from '../../../../interfaces/models/IEducation';

import {selectProfileEducationsState} from '../../../../redux/profile/educations/selectors';
import {profileEducationsChangeSort} from '../../../../redux/profile/educations/actions';
import thunkProfileEducations from '../../../../redux/profile/educations/thunks';
import findSortRule from '../../../../utils/helpers/findSortRule';

import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import EducationItem from './EducationItem';
import UserProfileContext from '../../../../utils/contexts/UserProfileContext';
import {useLocation} from 'react-router';


const mapStateToProps = (state: RootState) => ({
	...selectProfileEducationsState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(userID: number, field: string) {
		dispatch(profileEducationsChangeSort(field));
		dispatch(thunkProfileEducations(1));
	},
	load(userID: number, page = 1) {
		dispatch(thunkProfileEducations(userID, page));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IRebukesTableProps = ConnectedProps<typeof connected>;
const EducationsTable: React.FC<IRebukesTableProps> = (props) => {
	const {user} = useContext(UserProfileContext),
		  location = useLocation(),
		  changeSortWrapper = (field: string) => {
			  props.changeSort(user.id, field);
		  };

	useEffect(() => {
		//load educations for user with cur page
		const q = qs.parse(location.search.slice(1));

		if (!props.isLoading)
			props.load(user.id, q.page && location.hash == '#educations' ? +q.page : 1);
	}, []);

	const {t} = useTranslation();

	return (
		<div className="table-wrapper">
			<Table striped bordered hover style={{minWidth: '800px'}}>
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
						{t('profile.tabs.educations.institutionName')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'institution')?.direction}
							change={changeSortWrapper}
							param="institution"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.educations.graduateYear')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'graduateYear')?.direction}
							change={changeSortWrapper}
							param="graduateYear"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.educations.qualification')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'qualification')?.direction}
							change={changeSortWrapper}
							param="qualification"
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
					!props.isLoading && !props.error && !props.educations.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={6} className="text-center">
							{t('common.noItems', {what: 'образований'})}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.educations.map((education: IEducation) => (
						<EducationItem education={education} key={education.id}/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(EducationsTable);
