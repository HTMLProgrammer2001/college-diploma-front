import React from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';
import {isSubmitting, submit} from 'redux-form';

import BackButton from '../../../common/BackButton';
import ImportRebukesForm from './ImportRebukesForm';
import {RootState} from '../../../redux';
import thunkImportRebuke from '../../../redux/rebukes/import/thunks';


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

					<a
						href={`${process.env.REACT_APP_SERVER_URL}/examples/rebukes`}
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

export default connected(ImportRebukesPage);
