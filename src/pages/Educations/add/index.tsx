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
import thunkAddEducation from '../../../redux/educations/add/thunks';
import AddEducationForm from './AddEducationForm';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('educationsAddForm')(state)
});

const connected = connect(mapStateToProps, {
	add: thunkAddEducation,
	send: submit
});

type IAddEducationPageProps = ConnectedProps<typeof connected>;
const AddEducationPage: React.FC<IAddEducationPageProps> = ({add, send, submitting}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('educations.add.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('educations.add.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<AddEducationForm onSubmit={add}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Button
							variant="success"
							onClick={() => send('educationsAddForm')}
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

export default compose<React.FC<IAddEducationPageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(AddEducationPage);
