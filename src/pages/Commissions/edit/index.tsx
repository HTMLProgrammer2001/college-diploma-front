import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {isSubmitting, submit} from 'redux-form';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import EditCommissionForm, {ICommissionsEditData} from './EditCommissionForm';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader';
import {selectEditCommissionState} from '../../../redux/commissions/edit/selectors';
import thunkEditCommissionLoad from '../../../redux/commissions/edit/thunks/thunkEditCommissionLoad';
import thunkEditCommission from '../../../redux/commissions/edit/thunks/thunkEditCommission';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditCommissionState(state),
	submitting: isSubmitting('commissionsEditForm')(state)
});

const connected = connect(mapStateToProps, {
	loadCommission: thunkEditCommissionLoad,
	send: submit,
	editCommission: thunkEditCommission
});

type IEditCommissionPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditCommissionPage: React.FC<IEditCommissionPageProps> = ({editState, loadCommission, ...props}) => {
	useEffect(() => {
		loadCommission(+props.match.params.id);
	}, []);

	const clickHandler = () => {
		props.send('commissionsEditForm');
	};

	const submitHandler = (vals: ICommissionsEditData) => {
		props.editCommission(+props.match.params.id, vals);
	};

	if(!editState.commission && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">Редактировать комиссию</div>

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
									onClick={clickHandler}
									disabled={props.submitting}
								>
									{
										props.submitting &&
											<Spinner animation="border" size="sm"/>
									}

									Редактировать
								</Button>
						}
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default connected(EditCommissionPage);
