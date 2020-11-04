import React, {useEffect} from 'react';
import {Table} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import {ICategory} from '../../../interfaces/models/ICategory';

import SortItem from '../../../common/SortItem';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import findSortRule from '../../../utils/helpers/findSortRule';
import CategoryItem from './CategoryItem';
import {selectDeleteCategories} from '../../../redux/categories/delete/selectors';
import {selectAllCategoriesState} from '../../../redux/categories/all/selectors';
import {allCategoriesChangeSort} from '../../../redux/categories/all/actions';
import thunkAllCategories from '../../../redux/categories/all/thunks';
import thunkDeleteCategory from '../../../redux/categories/delete/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectAllCategoriesState(state),
	deleting: selectDeleteCategories(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	changeSort(field: string) {
		dispatch(allCategoriesChangeSort(field));
		dispatch(thunkAllCategories(1));
	},
	load(page = 1) {
		dispatch(thunkAllCategories(page));
	},
	deleteItem(id: number) {
		dispatch(thunkDeleteCategory(id));
	}
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type ICategoriesTableProps = ConnectedProps<typeof connected>;
const CategoriesTable: React.FC<ICategoriesTableProps> = (props) => {
	useEffect(() => {
		if (!props.isLoading && !props.categories.length)
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
						{t('categories.all.name')}
					</span>

						<SortItem
							state={findSortRule(props.sort, 'name')?.direction}
							change={props.changeSort}
							param="name"
						/>
					</th>

					<th>{t('common.actions')}</th>
				</tr>
				</thead>
				<tbody>
				{
					props.isLoading &&
					<tr>
						<th colSpan={3} className="text-center">
							<Loader/>
						</th>
					</tr>
				}

				{
					props.error &&
					<tr className="text-center text-danger">
						<th colSpan={3} className="text-center">
							<ErrorElement error={props.error}/>
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error && !props.categories.length &&
					<tr className="font-weight-bold text-center">
						<th colSpan={3} className="text-center">
							{
								t('common.noItems', {
									what: t('categories.all.noForm')
								})
							}
						</th>
					</tr>
				}

				{
					!props.isLoading && !props.error &&
					props.categories.map((category: ICategory) => (
						<CategoryItem
							key={category.id}
							category={category}
							isDeleting={props.deleting.findIndex((id) => id == category.id) == -1}
							del={props.deleteItem}
						/>
					))
				}
				</tbody>
			</Table>
		</div>
	);
};

export default connected(CategoriesTable);
