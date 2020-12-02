import React from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';
import {isSubmitting, submit} from 'redux-form';
import {compose} from 'redux';

import BackButton from '../../../common/BackButton';
import ImportRebukesForm from './ImportRebukesForm';
import {RootState} from '../../../redux';
import thunkImportRebuke from '../../../redux/rebukes/import/thunks';
import ExampleButton from '../../../common/ExampleButton';
import rebukesApi from '../../../utils/api/models/rebukesApi';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	isSubmit: isSubmitting('rebukesImportForm')(state)
});

const connected = connect(mapStateToProps, {
	importRebukes: thunkImportRebuke,
	send: () => submit('rebukesImportForm')
});

type IImportRebukesPageProps = ConnectedProps<typeof connected>;
const ImportRebukesPage: React.FC<IImportRebukesPageProps> = (props) => {
	const {isSubmit, importRebukes, send} = props;
	const {t} = useTranslation();

	return (
		<>
			<div className="title">
				{t('rebukes.import.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body className="d-flex flex-column align-items-center">
					<ImportRebukesForm onSubmit={importRebukes}/>
					<ExampleButton load={rebukesApi.downloadExample} fileName="rebukes.xlsx"/>
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
)(ImportRebukesPage);
