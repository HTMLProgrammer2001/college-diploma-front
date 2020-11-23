import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {useLocation} from 'react-router';
import qs from 'querystring';

import {RootState} from '../../../redux';
import {IPublication} from '../../../interfaces/models/IPublication';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import findSortRule from '../../../utils/helpers/findSortRule';
import PublicationItem from './PublicationItem';
import {selectAllPublicationsState} from '../../../redux/publications/all/selectors';
import {selectDeletePublications} from '../../../redux/publications/delete/selectors';
import {allPublicationsChangeSort} from '../../../redux/publications/all/actions';
import thunkAllPublications from '../../../redux/publications/all/thunks';
import thunkDeletePublication from '../../../redux/publications/delete/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectAllPublicationsState(state),
	deleting: selectDeletePublications(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allPublicationsChangeSort(field));
		dispatch(thunkAllPublications(1));
	},
	load(page = 1) {
		dispatch(thunkAllPublications(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeletePublication(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type ICommissionsTableProps = ConnectedProps<typeof connected>;
const PublicationsTable: React.FC<ICommissionsTableProps> = (props) => {
	const location = useLocation();

	useEffect(() => {
		//parse page from QP and load publications
		const q = qs.parse(location.search.slice(1));

		if (!props.isLoading && !props.publications.length)
			props.load(q.page ? +q.page : 1);
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
						{t('publications.all.name')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'name')?.direction}
							change={props.changeSort}
							param="name"
						/>
					</th>

					<th>
					<span className="pull-left">
						{t('publications.all.authors')}
					</span>
					</th>

					<th>
					<span className="pull-left">
						{t('publications.all.date')}
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
					!props.isLoading && !props.error && !props.publications.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={5} className="text-center">
							{
								t('common.noItems', {
									what: t('publications.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.publications.map((publication: IPublication) => (
						<PublicationItem
							key={publication.id}
							publication={publication}
							isDeleting={props.deleting.findIndex((id: number) => id == publication.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(PublicationsTable);
