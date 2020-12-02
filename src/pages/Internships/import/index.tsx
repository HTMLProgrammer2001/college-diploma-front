import React from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';
import {compose} from 'redux';
import {isSubmitting, submit} from 'redux-form';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import ImportInternshipsForm from './ImportInternshipsForm';

import thunkImportInternship from '../../../redux/internships/import/thunks';
import ExampleButton from '../../../common/ExampleButton';
import internshipsApi from '../../../utils/api/models/internshipsApi';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	isSubmit: isSubmitting('internshipsImportForm')(state)
});

const connected = connect(mapStateToProps, {
	importInternships: thunkImportInternship,
	send: () => submit('internshipsImportForm')
});

type IImportInternshipsPageProps = ConnectedProps<typeof connected>;
const ImportInternshipsPage: React.FC<IImportInternshipsPageProps> = (props) => {
	const {isSubmit, importInternships, send} = props;
	const {t} = useTranslation();

	return (
		<>
			<div className="title">
				{t('internships.import.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body className="d-flex flex-column align-items-center">
					<ImportInternshipsForm onSubmit={importInternships}/>
					<ExampleButton load={internshipsApi.downloadExample} fileName="internships.xlsx"/>
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

export default compose<React.FC<IImportInternshipsPageProps>>(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(ImportInternshipsPage);
