import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router';
import qs from 'querystring';

import {RootState} from '../../../redux';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import findSortRule from '../../../utils/helpers/findSortRule';
import EducationItem from './EducationItem';
import {selectAllEducationsState} from '../../../redux/educations/all/selectors';
import {selectDeleteEducations} from '../../../redux/educations/delete/selectors';
import {allEducationsChangeSort} from '../../../redux/educations/all/actions';
import thunkAllEducations from '../../../redux/educations/all/thunks';
import thunkDeleteEducation from '../../../redux/educations/delete/thunks';
import {IEducation} from '../../../interfaces/models/IEducation';


const mapStateToProps = (state: RootState) => ({
	...selectAllEducationsState(state),
	deleting: selectDeleteEducations(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allEducationsChangeSort(field));
		dispatch(thunkAllEducations(1));
	},
	load(page = 1) {
		dispatch(thunkAllEducations(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteEducation(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IHonorsTableProps = ConnectedProps<typeof connected>;
const EducationsTable: React.FC<IHonorsTableProps> = (props) => {
	const {t} = useTranslation(),
		location = useLocation();

	useEffect(() => {
		//parse page from QP and load educations
		const q = qs.parse(location.search.slice(1));

		if (!props.isLoading && !props.educations.length)
			props.load(q.page ? +q.page : 1);
	}, []);

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
						{t('educations.all.user')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'user')?.direction}
							change={props.changeSort}
							param="user"
						/>
					</th>

					<th>
						<span className="pull-left">
							{t('educations.all.qualification')}
						</span>

						<SortItem
							state={findSortRule(props.sort, 'qualification')?.direction}
							change={props.changeSort}
							param="qualification"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('educations.all.graduateYear')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'graduateYear')?.direction}
							change={props.changeSort}
							param="graduateYear"
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
					!props.isLoading && !props.error && !props.educations.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={6} className="text-center">
							{
								t('common.noItems', {
									what: t('educations.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.educations.map((education: IEducation) => (
						<EducationItem
							key={education.id}
							education={education}
							isDeleting={props.deleting.findIndex((id: number) => id == education.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(EducationsTable);
