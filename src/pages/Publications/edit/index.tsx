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
import {selectEditPublicationState} from '../../../redux/publications/edit/selectors';
import thunkEditPublicationLoad from '../../../redux/publications/edit/thunks/thunkEditPublicationLoad';
import thunkEditPublication from '../../../redux/publications/edit/thunks/thunkEditPublication';
import EditPublicationForm, {IPublicationsEditData} from './EditPublicationForm';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditPublicationState(state),
	submitting: isSubmitting('publicationsEditForm')(state)
});

const connected = connect(mapStateToProps, {
	loadPublication: thunkEditPublicationLoad,
	send: submit,
	editPublication: thunkEditPublication
});

type IEditPublicationPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditPublicationPage: React.FC<IEditPublicationPageProps> = ({editState, loadPublication, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadPublication(+props.match.params.id);
		document.title = t('publications.edit.pageTitle');
	}, []);

	const clickHandler = () => {
		props.send('publicationsEditForm');
	};

	const submitHandler = (vals: IPublicationsEditData) => {
		props.editPublication(+props.match.params.id, vals);
	};

	if(!editState.publication && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('publications.edit.pageTitle')}</div>

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
							<EditPublicationForm onSubmit={submitHandler}/>
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

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(EditPublicationPage));
