import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {ConnectedProps, connect} from 'react-redux';
import {submit, isSubmitting} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import AddPublicationForm from './AddPublicationForm';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import thunkAddPublication from '../../../redux/publications/add/thunks';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('publicationsAddForm')(state)
});

const connected = connect(mapStateToProps, {
	add: thunkAddPublication,
	send: submit
});

type IAddPublicationPageProps = ConnectedProps<typeof connected>;
const AddPublicationPage: React.FC<IAddPublicationPageProps> = ({add, send, submitting}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('publications.add.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('publications.add.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<AddPublicationForm onSubmit={add}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Button
							variant="success"
							onClick={() => send('publicationsAddForm')}
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

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(AddPublicationPage));
