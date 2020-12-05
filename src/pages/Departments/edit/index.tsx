import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {isSubmitting, submit} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import EditDepartmentForm, {IDepartmentsEditData} from './EditDepartmentForm';
import {selectEditDepartmentState} from '../../../redux/departments/edit/selectors';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader/Loader';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import thunkEditDepartment from '../../../redux/departments/edit/thunks/thunkEditDepartment';
import thunkEditDepartmentLoad from '../../../redux/departments/edit/thunks/thunkEditDepartmentLoad';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditDepartmentState(state),
	submitting: isSubmitting('departmentsEditForm')(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	editDepartment: (id: number, vals: IDepartmentsEditData) => {
		dispatch(thunkEditDepartment(id, vals));
		return;
	},
	send: () => dispatch(submit('departmentsEditForm')),
	loadDepartment: (id: number) => dispatch(thunkEditDepartmentLoad(id))
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IEditDepartmentPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditDepartmentPage: React.FC<IEditDepartmentPageProps> = ({editState, loadDepartment, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadDepartment(+props.match.params.id);
		document.title = t('departments.edit.pageTitle');
	}, []);

	const submitHandler = (vals: IDepartmentsEditData) => {
		props.editDepartment(+props.match.params.id, vals);
	};

	if(!editState.department && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">
				{t('departments.edit.pageTitle')}
			</div>

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
							<EditDepartmentForm onSubmit={submitHandler}/>
					}
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						{
							!editState.isLoading && !editState.error &&
								<Button
									variant="warning"
									onClick={props.send}
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

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(EditDepartmentPage));
