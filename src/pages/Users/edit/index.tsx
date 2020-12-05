import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {isSubmitting, submit} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';

import BackButton from '../../../common/BackButton';
import EditUserForm, {IUsersEditData} from './EditUserForm';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader/Loader';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {selectEditUserState} from '../../../redux/users/edit/selectors';
import thunkEditUserLoad from '../../../redux/users/edit/thunks/thunkEditUserLoad';
import thunkEditUser from '../../../redux/users/edit/thunks/thunkEditUser';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditUserState(state),
	submitting: isSubmitting('usersEditForm')(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	editUser: (id: number, vals: IUsersEditData) => {
		dispatch(thunkEditUser(id, vals));
		return;
	},
	send: () => dispatch(submit('usersEditForm')),
	loadUser: (id: number) => dispatch(thunkEditUserLoad(id))
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IEditUserPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditUserPage: React.FC<IEditUserPageProps> = ({editState, loadUser, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadUser(+props.match.params.id);
		document.title = t('users.edit.pageTitle');
	}, []);

	const submitHandler = (vals: IUsersEditData) => {
		props.editUser(+props.match.params.id, vals);
	};

	if(!editState.user && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('users.edit.pageTitle')}</div>

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
							<EditUserForm onSubmit={submitHandler}/>
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

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(EditUserPage));
