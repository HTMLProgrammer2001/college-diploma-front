import React from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';
import {isSubmitting, submit} from 'redux-form';

import BackButton from '../../../common/BackButton';
import ImportUsersForm from './ImportUsersForm';
import {RootState} from '../../../redux';
import thunkImportUser from '../../../redux/users/import/thunks';
import ExampleButton from '../../../common/ExampleButton';
import usersApi from '../../../utils/api/models/usersApi';


const mapStateToProps = (state: RootState) => ({
	isSubmit: isSubmitting('usersImportForm')(state)
});

const connected = connect(mapStateToProps, {
	importUsers: thunkImportUser,
	send: () => submit('usersImportForm')
});

type IImportUsersPageProps = ConnectedProps<typeof connected>;
const ImportUsersPage: React.FC<IImportUsersPageProps> = (props) => {
	const {isSubmit, importUsers, send} = props;
	const {t} = useTranslation();

	return (
		<>
			<div className="title">
				{t('users.import.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body className="d-flex flex-column align-items-center">
					<ImportUsersForm onSubmit={importUsers}/>
					<ExampleButton load={usersApi.downloadExample} fileName="users.xlsx"/>
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

export default connected(ImportUsersPage);

