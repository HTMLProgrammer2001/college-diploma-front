import React, {useEffect} from 'react';
import {Button, Card, Row, Spinner} from 'react-bootstrap';
import {ConnectedProps, connect} from 'react-redux';
import {submit, isSubmitting} from 'redux-form';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';

import BackButton from '../../../common/BackButton';
import AddUserForm from './AddUserForm';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import thunkAddUser from '../../../redux/users/add/thunks';


const mapStateToProps = (state: RootState) => ({
	submitting: isSubmitting('usersAddForm')(state)
});

const connected = connect(mapStateToProps, {
	add: thunkAddUser,
	send: submit
});

type IAddUserPageProps = ConnectedProps<typeof connected>;
const AddUserPage: React.FC<IAddUserPageProps> = ({add, send, submitting}) => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('users.add.pageTitle');
	}, []);

	return (
		<>
			<div className="title">
				{t('users.add.pageTitle')}
			</div>

			<Card className="mr-5">
				<Card.Body>
					<AddUserForm onSubmit={add}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Button
							variant="success"
							onClick={() => send('usersAddForm')}
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

export default IsUserRoleMore(Roles.MODERATOR, true)(connected(AddUserPage));
