import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {RouteComponentProps} from 'react-router-dom';
import {isSubmitting, submit} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import ErrorElement from '../../../common/ErrorElement';
import Loader from '../../../common/Loader/Loader';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import {selectEditRankState} from '../../../redux/ranks/edit/selectors';
import thunkEditRankLoad from '../../../redux/ranks/edit/thunks/thunkEditRankLoad';
import thunkEditRank from '../../../redux/ranks/edit/thunks/thunkEditRank';
import EditRankForm, {IRanksEditData} from './EditRankForm';


const mapStateToProps = (state: RootState) => ({
	editState: selectEditRankState(state),
	submitting: isSubmitting('ranksEditForm')(state)
});

const connected = connect(mapStateToProps, {
	loadRank: thunkEditRankLoad,
	send: submit,
	editRank: thunkEditRank
});

type IEditRankPageProps = ConnectedProps<typeof connected> & RouteComponentProps<{id?: string}>;
const EditRankPage: React.FC<IEditRankPageProps> = ({editState, loadRank, ...props}) => {
	const {t} = useTranslation();

	useEffect(() => {
		loadRank(+props.match.params.id);
		document.title = t('ranks.edit.pageTitle');
	}, []);

	const clickHandler = () => {
		props.send('ranksEditForm');
	};

	const submitHandler = (vals: IRanksEditData) => {
		props.editRank(+props.match.params.id, vals);
	};

	if(!editState.rank && !editState.isLoading)
		return null;

	return (
		<>
			<div className="title">{t('ranks.edit.pageTitle')}</div>

			<Card className="mr-5">
				<Card.Body>
					{
						editState.isLoading &&
							<Loader/>
					}

					{
						!editState.isLoading && editState.error &&
							<ErrorElement error={editState.error}/>
					}

					{
						!editState.isLoading && !editState.error &&
							<EditRankForm onSubmit={submitHandler}/>
					}
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						{
							!editState.isLoading && !editState.error &&
								<Button
									variant="warning"
									onClick={clickHandler}
									disabled={props.submitting}
								>
									{
										props.submitting &&
											<Spinner animation="border" size="sm"/>
									}

									{t('common.edit')}
								</Button>
						}
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(EditRankPage));
