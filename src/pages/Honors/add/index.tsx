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
import thunkAddHonor from '../../../redux/honors/add/thunks';
import AddHonorForm from './AddHonorForm';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('honorsAddForm')(state)
});

const connected = connect(mapStateToProps, {
	add: thunkAddHonor,
	send: submit
});

type IAddPublicationPageProps = ConnectedProps<typeof connected>;
const AddPublicationPage: React.FC<IAddPublicationPageProps> = ({add, send, submitting}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('honors.add.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('honors.add.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<AddHonorForm onSubmit={add}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Button
							variant="success"
							onClick={() => send('honorsAddForm')}
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

export default compose(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(AddPublicationPage);
