import React, {useEffect} from 'react';
import {RouteComponentProps} from 'react-router';
import {Button, Card, Row} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import BackButton from '../../../common/BackButton';
import Loader from '../../../common/Loader/Loader';
import RebukeInfo from './RebukeInfo';
import ErrorElement from '../../../common/ErrorElement';

import {RootState} from '../../../redux';
import {selectRebukeSingleState} from '../../../redux/rebukes/single/selectors';
import thunkSingleRebuke from '../../../redux/rebukes/single/thunks';
import UserCan from '../../../common/UserCan';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	...selectRebukeSingleState(state)
});

const connected = connect(mapStateToProps, {load: thunkSingleRebuke});

type ISingleRebukePageProps = RouteComponentProps<{id: string}> & ConnectedProps<typeof connected>;
const SingleRebukePage: React.FC<ISingleRebukePageProps> = (props) => {
	const {match, isLoading, error, rebuke, load} = props;
	const {t} = useTranslation();

	useEffect(() => {
		load(+match.params.id);
	}, []);

	return (
		<>
			<div className="title">
				{t('rebukes.single.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					{isLoading && <Loader/>}
					{!isLoading && error && <ErrorElement error={error}/>}

					{
						!isLoading && !error && rebuke &&
							<RebukeInfo rebuke={rebuke}/>
					}
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<UserCan role={Roles.MODERATOR}>
							<Link to={`/rebukes/${match.params.id}/edit`}>
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

export default connected(SingleRebukePage);
