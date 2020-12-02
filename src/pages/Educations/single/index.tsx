import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router';
import {Button, Card, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import BackButton from '../../../common/BackButton';
import Loader from '../../../common/Loader/Loader';
import ErrorElement from '../../../common/ErrorElement';
import EducationInfo from './EducationInfo';
import UserCan from '../../../common/UserCan';

import {RootState} from '../../../redux';
import thunkSingleEducation from '../../../redux/educations/single/thunks';
import {selectEducationSingleState} from '../../../redux/educations/single/selectors';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


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

						<UserCan role={Roles.MODERATOR}>
							<Link to={`/educations/${match.params.id}/edit`}>
								<Button variant="warning">
									{t('common.edit')}
								</Button>
							</Link>
						</UserCan>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default connected(SingleEducationPage);
