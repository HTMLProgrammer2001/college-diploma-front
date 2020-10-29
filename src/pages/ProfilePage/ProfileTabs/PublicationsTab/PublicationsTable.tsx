import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../../redux';
import {IPublication} from '../../../../interfaces/models/IPublication';
import {selectProfilePublicationsState} from '../../../../redux/profile/publications/selectors';
import {profilePublicationsChangeSort} from '../../../../redux/profile/publications/actions';
import thunkProfilePublications from '../../../../redux/profile/publications/thunks';
import findSortRule from '../../../../utils/helpers/findSortRule';

import SortItem from '../../../../common/SortItem';
import Loader from '../../../../common/Loader/Loader';
import ErrorElement from '../../../../common/ErrorElement';
import PublicationItem from './PublicationItem';


const mapStateToProps = (state: RootState) => ({
	...selectProfilePublicationsState(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	load(page: number = 1) {
		dispatch(thunkProfilePublications(page));
	},
	changeSort(field: string) {
		dispatch(profilePublicationsChangeSort(field));
		dispatch(thunkProfilePublications());
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IPublicationsTableProps = ConnectedProps<typeof connected>;
const PublicationsTable: React.FC<IPublicationsTableProps> = (props) => {
	useEffect(() => {
		if (!props.isLoading && !props.publications.length)
			props.load();
	}, []);

	const {t} = useTranslation();

	return (
		<div className="table-wrapper">
			<Table striped bordered hover className="table" style={{minWidth: '825px'}}>
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
						{t('profile.tabs.publications.publicationName')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'title')?.direction}
							change={props.changeSort}
							param="title"
						/>
					</th>

					<th>
						{t('profile.tabs.publications.authors')}
					</th>

					<th>
					<span className="pull-left">
						{t('profile.tabs.publications.publicationDate')}
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
							{t('common.noItems', {what: 'публикаций'})}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.publications.map((publication: IPublication) => (
						<PublicationItem publication={publication} key={publication.id}/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(PublicationsTable);
