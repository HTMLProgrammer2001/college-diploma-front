import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {isSubmitting, submit} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import EditCommissionForm, {ICommissionsEditData} from './EditCommissionForm';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader/Loader';
import {selectEditCommissionState} from '../../../redux/commissions/edit/selectors';
import thunkEditCommissionLoad from '../../../redux/commissions/edit/thunks/thunkEditCommissionLoad';
import thunkEditCommission from '../../../redux/commissions/edit/thunks/thunkEditCommission';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditCommissionState(state),
	submitting: isSubmitting('commissionsEditForm')(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	editCommission: (id: number, vals: ICommissionsEditData) => {
		dispatch(thunkEditCommission(id, vals));
		return;
	},
	send: () => dispatch(submit('commissionsEditForm')),
	loadCommission: (id: number) => dispatch(thunkEditCommissionLoad(id))
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IEditCommissionPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditCommissionPage: React.FC<IEditCommissionPageProps> = ({editState, loadCommission, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadCommission(+props.match.params.id);
		document.title = t('commissions.edit.pageTitle');
	}, []);

	const submitHandler = (vals: ICommissionsEditData) => {
		props.editCommission(+props.match.params.id, vals);
	};

	if(!editState.commission && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('commissions.edit.pageTitle')}</div>

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
							<EditCommissionForm onSubmit={submitHandler}/>
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

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(EditCommissionPage));
