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
import thunkEditDepartmentLoad from '../../../redux/departments/edit/thunks/thunkEditDepartmentLoad';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader/Loader';
import thunkEditDepartment from '../../../redux/departments/edit/thunks/thunkEditDepartment';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditDepartmentState(state),
	submitting: isSubmitting('departmentsEditForm')(state)
});

const connected = connect(mapStateToProps, {
	loadDepartment: thunkEditDepartmentLoad,
	send: submit,
	editDepartment: thunkEditDepartment
});

type IEditDepartmentPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditDepartmentPage: React.FC<IEditDepartmentPageProps> = ({editState, loadDepartment, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadDepartment(+props.match.params.id);
		document.title = t('departments.edit.pageTitle');
	}, []);

	const clickHandler = () => {
		props.send('departmentsEditForm');
	};

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

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(EditDepartmentPage));
