import React from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';
import {isSubmitting, submit} from 'redux-form';

import BackButton from '../../../common/BackButton';
import ImportPublicationsForm from './ImportPublicationsForm';
import {RootState} from '../../../redux';
import thunkImportPublication from '../../../redux/publications/import/thunks';


const mapStateToProps = (state: RootState) => ({
	isSubmit: isSubmitting('importPublicationsForm')(state)
});

const connected = connect(mapStateToProps, {
	importPublications: thunkImportPublication,
	send: () => submit('importPublicationsForm')
});

type IImportPublicationsPageProps = ConnectedProps<typeof connected>;
const ImportPublicationsPage: React.FC<IImportPublicationsPageProps> = (props) => {
	const {isSubmit, importPublications, send} = props;
	const {t} = useTranslation();

	return (
		<>
			<div className="title">
				{t('publications.import.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body className="d-flex flex-column align-items-center">
					<ImportPublicationsForm onSubmit={importPublications}/>

					<a
						href={`${process.env.REACT_APP_SERVER_URL}/examples/publications`}
						target="_blank"
						className="mt-3"
					>{t('common.downloadExample')}</a>
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

export default connected(ImportPublicationsPage);
