import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {isSubmitting, submit} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import BackButton from '../../../common/BackButton';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader/Loader';
import EditInternshipForm, {IInternshipsEditData} from './EditInternshipForm';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {selectEditInternshipState} from '../../../redux/internships/edit/selectors';
import thunkEditInternshipLoad from '../../../redux/internships/edit/thunks/thunkEditInternshipLoad';
import thunkEditInternship from '../../../redux/internships/edit/thunks/thunkEditInternship';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditInternshipState(state),
	submitting: isSubmitting('internshipsEditForm')(state)
});

const connected = connect(mapStateToProps, {
	loadInternship: thunkEditInternshipLoad,
	send: submit,
	editInternship: thunkEditInternship
});

type IEditInternshipPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditInternshipPage: React.FC<IEditInternshipPageProps> = ({editState, loadInternship, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadInternship(+props.match.params.id);
		document.title = t('internships.edit.pageTitle');
	}, []);

	const clickHandler = () => {
		props.send('internshipsEditForm');
	};

	const submitHandler = (vals: IInternshipsEditData) => {
		props.editInternship(+props.match.params.id, vals);
	};

	if(!editState.internship && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('internships.edit.pageTitle')}</div>

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
							<EditInternshipForm onSubmit={submitHandler}/>
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

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(EditInternshipPage));
