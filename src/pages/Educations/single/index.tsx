import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router';
import {Button, Card, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import BackButton from '../../../common/BackButton';
import {RootState} from '../../../redux';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import EducationInfo from './EducationInfo';
import thunkSingleEducation from '../../../redux/educations/single/thunks';
import {selectEducationSingleState} from '../../../redux/educations/single/selectors';


const mapStateToProps = (state: RootState) => ({
	...selectEducationSingleState(state)
});

const connected = connect(mapStateToProps, {load: thunkSingleEducation});

type ISingleEducationPageProps = RouteComponentProps<{id: string}> & ConnectedProps<typeof connected>;
const SingleEducationPage: React.FC<ISingleEducationPageProps> = (props) => {
	const {match, isLoading, error, education, load} = props;
	const {t} = useTranslation();

	useEffect(() => {
		load(+match.params.id);
	}, []);

	return (
		<>
			<div className="title">
				{t('educations.single.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					{isLoading && <Loader/>}
					{!isLoading && error && <ErrorElement error={error}/>}

					{
						!isLoading && !error && education &&
							<EducationInfo education={education}/>
					}
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Link to={`/educations/${match.params.id}/edit`}>
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

export default connected(SingleEducationPage);
