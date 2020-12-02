import React from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';
import {isSubmitting, submit} from 'redux-form';
import {compose} from 'redux';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';

import thunkImportQualification from '../../../redux/qualifications/import/thunks';
import ImportQualificationsForm from './ImportQualificationsForm';
import ExampleButton from '../../../common/ExampleButton';
import qualificationsApi from '../../../utils/api/models/qualificationsApi';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	isSubmit: isSubmitting('qualificationsImportForm')(state)
});

const connected = connect(mapStateToProps, {
	importQualifications: thunkImportQualification,
	send: () => submit('qualificationsImportForm')
});

type IImportQualificationsPageProps = ConnectedProps<typeof connected>;
const ImportQualificationsPage: React.FC<IImportQualificationsPageProps> = (props) => {
	const {isSubmit, importQualifications, send} = props;
	const {t} = useTranslation();

	return (
		<>
			<div className="title">
				{t('qualifications.import.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body className="d-flex flex-column align-items-center">
					<ImportQualificationsForm onSubmit={importQualifications}/>
					<ExampleButton load={qualificationsApi.downloadExample} fileName="qualifications.xlsx"/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Button
							variant="success"
							onClick={send}
						>
							{isSubmit && <Spinner animation="border" size="sm"/>}

							<span className="mr-1">
								{t('common.import')}
							</span>
						</Button>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default compose<React.FC<IImportQualificationsPageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(ImportQualificationsPage);
