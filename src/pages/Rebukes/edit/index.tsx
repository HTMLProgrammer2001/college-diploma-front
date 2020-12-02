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
import {selectEditRebukeState} from '../../../redux/rebukes/edit/selectors';
import thunkEditRebukeLoad from '../../../redux/rebukes/edit/thunks/thunkEditRebukeLoad';
import thunkEditRebuke from '../../../redux/rebukes/edit/thunks/thunkEditRebuke';
import EditRebukeForm, {IRebukesEditData} from './EditRebukeForm';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditRebukeState(state),
	submitting: isSubmitting('rebukesEditForm')(state)
});

const connected = connect(mapStateToProps, {
	loadRebuke: thunkEditRebukeLoad,
	send: submit,
	editRebuke: thunkEditRebuke
});

type IEditRebukePageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditRebukePage: React.FC<IEditRebukePageProps> = ({editState, loadRebuke, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadRebuke(+props.match.params.id);
		document.title = t('rebukes.edit.pageTitle');
	}, []);

	const clickHandler = () => {
		props.send('rebukesEditForm');
	};

	const submitHandler = (vals: IRebukesEditData) => {
		props.editRebuke(+props.match.params.id, vals);
	};

	if(!editState.rebuke && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('rebukes.edit.pageTitle')}</div>

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
							<EditRebukeForm onSubmit={submitHandler}/>
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

export default compose(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(EditRebukePage);
