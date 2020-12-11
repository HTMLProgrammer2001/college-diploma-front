import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {isSubmitting, submit} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader/Loader';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import {selectEditCategoryState} from '../../../redux/categories/edit/selectors';
import thunkEditCategoryLoad from '../../../redux/categories/edit/thunks/thunkEditCategoryLoad';
import thunkEditCategory from '../../../redux/categories/edit/thunks/thunkEditCategory';
import EditCategoryForm, {ICategoriesEditData} from './EditCategoryForm';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditCategoryState(state),
	submitting: isSubmitting('categoriesEditForm')(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	editCategory: (id: number, vals: ICategoriesEditData) => {
		dispatch(thunkEditCategory(id, vals));
		return;
	},
	send: () => dispatch(submit('categoriesEditForm')),
	loadCategory: (id: number) => dispatch(thunkEditCategoryLoad(id))
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IEditCategoryPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{ id?: string }>;
const EditCategoryPage: React.FC<IEditCategoryPageProps> = ({editState, loadCategory, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadCategory(+props.match.params.id);
		document.title = t('categories.edit.pageTitle');
	}, []);

	const clickHandler = () => {
		props.send();
	};

	const submitHandler = (vals: ICategoriesEditData) => {
		props.editCategory(+props.match.params.id, vals);
	};

	if (!editState.category && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('categories.edit.pageTitle')}</div>

			<Card className="mr-5">
				<Card.Body>
					{
						editState.isLoading &&
						<Loader/>
					}

					{
						!editState.isLoading && editState.error &&
						<ErrorElement error={editState.error}/>
					}

					{
						!editState.isLoading && !editState.error &&
						<EditCategoryForm onSubmit={submitHandler}/>
					}
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						{
							!editState.isLoading && !editState.error &&
							<Button
								variant="warning"
								onClick={clickHandler}
								disabled={props.submitting}
							>
								{
									props.submitting &&
									<Spinner animation="border" size="sm"/>
								}

								{t('common.edit')}
							</Button>
						}
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(EditCategoryPage));
