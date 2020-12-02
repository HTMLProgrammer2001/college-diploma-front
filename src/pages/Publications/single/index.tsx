import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router';
import {Button, Card, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import BackButton from '../../../common/BackButton';
import Loader from '../../../common/Loader/Loader';
import PublicationInfo from './PublicationInfo';
import ErrorElement from '../../../common/ErrorElement';

import {RootState} from '../../../redux';
import {selectPublicationSingleState} from '../../../redux/publications/single/selectors';
import thunkSinglePublication from '../../../redux/publications/single/thunks';
import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	...selectPublicationSingleState(state)
});

const connected = connect(mapStateToProps, {load: thunkSinglePublication});

type ISinglePublicationPageProps = RouteComponentProps<{id: string}> & ConnectedProps<typeof connected>;
const SinglePublicationPage: React.FC<ISinglePublicationPageProps> = (props) => {
	const {match, isLoading, error, publication, load} = props;
	const {t} = useTranslation();

	useEffect(() => {
		load(+match.params.id);
	}, []);

	return (
		<>
			<div className="title">
				{t('publications.single.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					{isLoading && <Loader/>}
					{!isLoading && error && <ErrorElement error={error}/>}

					{
						!isLoading && !error && publication &&
							<PublicationInfo publication={publication}/>
					}
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<UserCan role={Roles.MODERATOR}>
							<Link to={`/publications/${match.params.id}/edit`}>
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

export default connected(SinglePublicationPage);
