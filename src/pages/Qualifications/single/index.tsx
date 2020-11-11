import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router';
import {Button, Card, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import Loader from '../../../common/Loader/Loader';
import QualificationInfo from './QualificationInfo';
import ErrorElement from '../../../common/ErrorElement';

import {selectQualificationSingleState} from '../../../redux/qualifications/single/selectors';
import thunkSingleQualification from '../../../redux/qualifications/single/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectQualificationSingleState(state)
});

const connected = connect(mapStateToProps, {load: thunkSingleQualification});

type ISingleQualificationPageProps = RouteComponentProps<{id: string}> & ConnectedProps<typeof connected>;
const SingleQualificationPage: React.FC<ISingleQualificationPageProps> = (props) => {
	const {match, isLoading, error, qualification, load} = props;
	const {t} = useTranslation();

	useEffect(() => {
		load(+match.params.id);
	}, []);

	return (
		<>
			<div className="title">
				{t('qualifications.single.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					{isLoading && <Loader/>}
					{!isLoading && error && <ErrorElement error={error}/>}

					{
						!isLoading && !error && qualification &&
							<QualificationInfo qualification={qualification}/>
					}
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Link to={`/qualifications/${match.params.id}/edit`}>
							<Button variant="warning">
								{t('common.edit')}
							</Button>
						</Link>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default connected(SingleQualificationPage);
