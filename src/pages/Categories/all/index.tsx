import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';

import BackButton from '../../../common/BackButton';
import Paginator from '../../../common/Paginator';
import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import thunkAllCategories from '../../../redux/categories/all/thunks';
import {selectAllCategoriesPagination} from '../../../redux/categories/all/selectors';
import CategoriesFilterForm from './CategoriesFilterForm';
import CategoriesTable from './CategoriesTable';


const mapStateToProps = (state: RootState) => ({
	paginator: selectAllCategoriesPagination(state)
});

const connected = connect(mapStateToProps, {changePage: thunkAllCategories});

type IAllCategoriesPageProps = ConnectedProps<typeof connected>;
const AllCategoriesPage: React.FC<IAllCategoriesPageProps> = ({changePage, paginator}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('categories.all.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('categories.name')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<div className="model__filter-form">
						<div>
							<UserCan role={Roles.MODERATOR}>
								<Link to="/categories/add">
									<Button variant="success">
										{t('common.add')}
									</Button>
								</Link>
							</UserCan>
						</div>

						<CategoriesFilterForm onSubmit={() => changePage(1)}/>
					</div>

					<CategoriesTable/>

					<div className="d-flex my-3 justify-content-end">
						<Paginator {...paginator} setCur={changePage}/>
					</div>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default connected(AllCategoriesPage);
