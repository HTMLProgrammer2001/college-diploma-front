import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router';
import {Button, Card, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import Loader from '../../../common/Loader/Loader';
import InternshipInfo from './InternshipInfo';
import ErrorElement from '../../../common/ErrorElement';

import {selectInternshipSingleState} from '../../../redux/internships/single/selectors';
import thunkSingleInternship from '../../../redux/internships/single/thunks';


const mapStateToProps = (state: RootState) => ({
	...selectInternshipSingleState(state)
});

const connected = connect(mapStateToProps, {load: thunkSingleInternship});

type ISingleInternshipPageProps = RouteComponentProps<{id: string}> & ConnectedProps<typeof connected>;
const SingleInternshipPage: React.FC<ISingleInternshipPageProps> = (props) => {
	const {match, isLoading, error, internship, load} = props;
	const {t} = useTranslation();

	useEffect(() => {
		load(+match.params.id);
	}, []);

	return (
		<>
			<div className="title">
				{t('internships.single.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					{isLoading && <Loader/>}
					{!isLoading && error && <ErrorElement error={error}/>}

					{
						!isLoading && !error && internship &&
							<InternshipInfo internship={internship}/>
					}
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Link to={`/internships/${match.params.id}/edit`}>
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

export default connected(SingleInternshipPage);
