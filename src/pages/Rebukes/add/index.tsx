import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {ConnectedProps, connect} from 'react-redux';
import {submit, isSubmitting} from 'redux-form';
import {useTranslation} from 'react-i18next';
import {compose} from 'redux';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import thunkAddRebuke from '../../../redux/rebukes/add/thunks';
import AddRebukeForm from './AddRebukeForm';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('rebukesAddForm')(state)
});

const connected = connect(mapStateToProps, {
	add: thunkAddRebuke,
	send: submit
});

type IAddRebukePageProps = ConnectedProps<typeof connected>;
const AddRebukePage: React.FC<IAddRebukePageProps> = ({add, send, submitting}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('rebukes.add.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('rebukes.add.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<AddRebukeForm onSubmit={add}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Button
							variant="success"
							onClick={() => send('rebukesAddForm')}
							disabled={submitting}
						>
							{submitting && <Spinner size="sm" animation="border"/>}
							{t('common.add')}
						</Button>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default compose<React.FC<IAddRebukePageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(AddRebukePage);
