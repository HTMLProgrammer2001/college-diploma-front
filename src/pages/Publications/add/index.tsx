import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {ConnectedProps, connect} from 'react-redux';
import {submit, isSubmitting} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import BackButton from '../../../common/BackButton';
import AddRankForm from './AddRankForm';
import thunkAddRank from '../../../redux/ranks/add/thunks';
import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('ranksAddForm')(state)
});

const connected = connect(mapStateToProps, {
	add: thunkAddRank,
	send: submit
});

type IAddRankPageProps = ConnectedProps<typeof connected>;
const AddRankPage: React.FC<IAddRankPageProps> = ({add, send, submitting}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('ranks.add.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('ranks.add.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<AddRankForm onSubmit={add}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Button
							variant="success"
							onClick={() => send('ranksAddForm')}
							disabled={submitting}
						>
							{submitting && <Spinner size="sm" animation="border"/>}
							{t('common.add')}
						</Button>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(AddRankPage));
