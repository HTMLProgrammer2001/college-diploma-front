import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {isSubmitting, submit} from 'redux-form';
import {useTranslation} from 'react-i18next';
import {compose} from 'redux';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader/Loader';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import {selectEditEducationState} from '../../../redux/educations/edit/selectors';
import thunkEditEducationLoad from '../../../redux/educations/edit/thunks/thunkEditEducationLoad';
import thunkEditEducation from '../../../redux/educations/edit/thunks/thunkEditEducation';
import EditEducationForm, {IEducationsEditData} from './EditEducationForm';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditEducationState(state),
	submitting: isSubmitting('educationsEditForm')(state)
});

const connected = connect(mapStateToProps, {
	loadEducation: thunkEditEducationLoad,
	send: submit,
	editEducation: thunkEditEducation
});

type IEditEducationPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditEducationPage: React.FC<IEditEducationPageProps> = ({editState, loadEducation, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadEducation(+props.match.params.id);
		document.title = t('educations.edit.pageTitle');
	}, []);

	const clickHandler = () => {
		props.send('educationsEditForm');
	};

	const submitHandler = (vals: IEducationsEditData) => {
		props.editEducation(+props.match.params.id, vals);
	};

	if(!editState.education && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('educations.edit.pageTitle')}</div>

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
							<EditEducationForm onSubmit={submitHandler}/>
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

export default compose<React.FC<IEditEducationPageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(EditEducationPage);
