import React from 'react';
import {Card, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import BackButton from '../../../common/BackButton';
import ImportPublicationsForm from './ImportPublicationsForm';


const ImportPublicationsPage: React.FC<{}> = () => {
	const {t} = useTranslation();

	return (
		<>
			<div className="title">
				{t('publications.import.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body className="d-flex flex-column align-items-center">
					<ImportPublicationsForm onSubmit={console.log}/>

					<a
						href={`${process.env.REACT_APP_SERVER_URL}/examples/publications`}
						target="_blank"
						className="mt-3"
					>{t('common.downloadExample')}</a>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default ImportPublicationsPage;
