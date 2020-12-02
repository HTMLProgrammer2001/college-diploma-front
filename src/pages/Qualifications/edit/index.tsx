import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {isSubmitting, submit} from 'redux-form';
import {useTranslation} from 'react-i18next';
import {compose} from 'redux';

import BackButton from '../../../common/BackButton';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader/Loader';
import EditQualificationForm, {IQualificationsEditData} from './EditQualificationForm';

import {RootState} from '../../../redux';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {selectEditQualificationState} from '../../../redux/qualifications/edit/selectors';
import thunkEditQualificationLoad from '../../../redux/qualifications/edit/thunks/thunkEditQualificationLoad';
import thunkEditQualification from '../../../redux/qualifications/edit/thunks/thunkEditQualification';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditQualificationState(state),
	submitting: isSubmitting('qualificationsEditForm')(state)
});

const connected = connect(mapStateToProps, {
	loadQualification: thunkEditQualificationLoad,
	send: submit,
	editQualification: thunkEditQualification
});

type IEditQualificationPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditQualificationPage: React.FC<IEditQualificationPageProps> = ({editState, loadQualification, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadQualification(+props.match.params.id);
		document.title = t('qualifications.edit.pageTitle');
	}, []);

	const clickHandler = () => {
		props.send('qualificationsEditForm');
	};

	const submitHandler = (vals: IQualificationsEditData) => {
		props.editQualification(+props.match.params.id, vals);
	};

	if(!editState.qualification && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('qualifications.edit.pageTitle')}</div>

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
							<EditQualificationForm onSubmit={submitHandler}/>
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

export default compose<React.FC<IEditQualificationPageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(EditQualificationPage);
