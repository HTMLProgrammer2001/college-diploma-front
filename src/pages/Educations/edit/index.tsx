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
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import {selectEditEducationState} from '../../../redux/educations/edit/selectors';
import EditEducationForm, {IEducationsEditData} from './EditEducationForm';
import thunkEditEducation from '../../../redux/educations/edit/thunks/thunkEditEducation';
import thunkEditEducationLoad from '../../../redux/educations/edit/thunks/thunkEditEducationLoad';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditEducationState(state),
	submitting: isSubmitting('educationsEditForm')(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	editEducation: (id: number, vals: IEducationsEditData) => {
		dispatch(thunkEditEducation(id, vals));
		return;
	},
	send: () => dispatch(submit('educationsEditForm')),
	loadEducation: (id: number) => dispatch(thunkEditEducationLoad(id))
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IEditEducationPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditEducationPage: React.FC<IEditEducationPageProps> = ({editState, loadEducation, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadEducation(+props.match.params.id);
		document.title = t('educations.edit.pageTitle');
	}, []);

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

export default compose<React.FC<IEditEducationPageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(EditEducationPage);
