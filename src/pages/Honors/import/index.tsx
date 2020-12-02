import React from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';
import {isSubmitting, submit} from 'redux-form';
import {compose} from 'redux';

import BackButton from '../../../common/BackButton';
import ImportHonorsForm from './ImportHonorsForm';
import {RootState} from '../../../redux';
import thunkImportHonor from '../../../redux/honors/import/thunks';
import ExampleButton from '../../../common/ExampleButton';
import honorsApi from '../../../utils/api/models/honorsApi';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	isSubmit: isSubmitting('honorsImportForm')(state)
});

const connected = connect(mapStateToProps, {
	importHonors: thunkImportHonor,
	send: () => submit('honorsImportForm')
});

type IImportHonorsPageProps = ConnectedProps<typeof connected>;
const ImportHonorsPage: React.FC<IImportHonorsPageProps> = (props) => {
	const {isSubmit, importHonors, send} = props;
	const {t} = useTranslation();

	return (
		<>
			<div className="title">
				{t('honors.import.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body className="d-flex flex-column align-items-center">
					<ImportHonorsForm onSubmit={importHonors}/>
					<ExampleButton load={honorsApi.downloadExample} fileName="honors.xlsx"/>
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

export default compose(
	IsUserRoleMore(Roles.MODERATOR, true),
	connected
)(ImportHonorsPage);
