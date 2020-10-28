import React from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {ConnectedProps, connect} from 'react-redux';
import {submit, isSubmitting} from 'redux-form';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import AddCommissionForm from './AddCommissionForm';
import thunkAddCommission from '../../../redux/commissions/add/thunks';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('commissionsAddForm')(state)
});

const connected = connect(mapStateToProps, {
	add: thunkAddCommission,
	send: submit
});

type IAddCommissionPageProps = ConnectedProps<typeof connected>;
const AddCommissionPage: React.FC<IAddCommissionPageProps> = ({add, send, submitting}) => (
	<>
		<div className="title">Добавить цикловую комиссию</div>

		<Card className="mr-5">
			<Card.Body>
				<AddCommissionForm onSubmit={add}/>
			</Card.Body>

			<Card.Footer>
				<Row className="justify-content-between p-2">
					<BackButton/>

					<Button
						variant="success"
						onClick={() => send('commissionsAddForm')}
						disabled={submitting}
					>
						{submitting && <Spinner size="sm" animation="border"/>}
						Создать
					</Button>
				</Row>
			</Card.Footer>
		</Card>
	</>
);

export default connected(AddCommissionPage);
