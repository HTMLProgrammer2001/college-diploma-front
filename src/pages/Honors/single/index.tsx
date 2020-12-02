import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router';
import {Button, Card, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import BackButton from '../../../common/BackButton';
import Loader from '../../../common/Loader/Loader';
import HonorInfo from './HonorInfo';
import ErrorElement from '../../../common/ErrorElement';
import UserCan from '../../../common/UserCan';

import {RootState} from '../../../redux';
import {selectHonorSingleState} from '../../../redux/honors/single/selectors';
import thunkSingleHonor from '../../../redux/honors/single/thunks';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	...selectHonorSingleState(state)
});

const connected = connect(mapStateToProps, {load: thunkSingleHonor});

type ISingleHonorPageProps = RouteComponentProps<{ id: string }> & ConnectedProps<typeof connected>;
const SingleHonorPage: React.FC<ISingleHonorPageProps> = (props) => {
	const {match, isLoading, error, honor, load} = props;
	const {t} = useTranslation();

	useEffect(() => {
		load(+match.params.id);
	}, []);

	return (
		<>
			<div className="title">
				{t('honors.single.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					{isLoading && <Loader/>}
					{!isLoading && error && <ErrorElement error={error}/>}

					{
						!isLoading && !error && honor &&
						<HonorInfo honor={honor}/>
					}
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<UserCan role={Roles.MODERATOR}>
							<Link to={`/honors/${match.params.id}/edit`}>
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

export default connected(SingleHonorPage);
