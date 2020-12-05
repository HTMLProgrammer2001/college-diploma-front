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
import {selectEditHonorState} from '../../../redux/honors/edit/selectors';
import thunkEditHonorLoad from '../../../redux/honors/edit/thunks/thunkEditHonorLoad';
import thunkEditHonor from '../../../redux/honors/edit/thunks/thunkEditHonor';
import EditHonorForm, {IHonorsEditData} from './EditHonorForm';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditHonorState(state),
	submitting: isSubmitting('honorsEditForm')(state)
});

const mapDispatchToProps = (dispatch: any) => ({
	editHonor: (id: number, vals: IHonorsEditData) => {
		dispatch(thunkEditHonor(id, vals));
		return;
	},
	send: () => dispatch(submit('honorsEditForm')),
	loadHonor: (id: number) => dispatch(thunkEditHonorLoad(id))
});

const connected = connect(mapStateToProps, mapDispatchToProps);

type IEditHonorPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditHonorPage: React.FC<IEditHonorPageProps> = ({editState, loadHonor, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadHonor(+props.match.params.id);
		document.title = t('honors.edit.pageTitle');
	}, []);

	const submitHandler = (vals: IHonorsEditData) => {
		props.editHonor(+props.match.params.id, vals);
	};

	if(!editState.honor && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('honors.edit.pageTitle')}</div>

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
							<EditHonorForm onSubmit={submitHandler}/>
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

export default compose<React.FC<IEditHonorPageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(EditHonorPage);
