import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {ConnectedProps, connect} from 'react-redux';
import {submit, isSubmitting} from 'redux-form';
import {useTranslation} from 'react-i18next';
import {compose} from 'redux';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import AddQualificationForm from './AddQualificationForm';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import thunkAddQualification from '../../../redux/qualifications/add/thunks';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('qualificationsAddForm')(state)
});

const connected = connect(mapStateToProps, {
	add: thunkAddQualification,
	send: submit
});

type IAddQualificationPageProps = ConnectedProps<typeof connected>;
const AddQualificationPage: React.FC<IAddQualificationPageProps> = ({add, send, submitting}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('qualifications.add.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('qualifications.add.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<AddQualificationForm onSubmit={add}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Button
							variant="success"
							onClick={() => send('qualificationsAddForm')}
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

export default compose<React.FC<IAddQualificationPageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(AddQualificationPage);
