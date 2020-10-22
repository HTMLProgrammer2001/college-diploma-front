import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';
import {submit} from 'redux-form';

import BackButton from '../../common/BackButton';
import ProfileEditForm from './EditProfileForm';


const connected = connect(null, (dispatch) => ({
	sendForm: () => dispatch(submit('editProfileForm'))
}));

type IProfileEditPageProps = ConnectedProps<typeof connected>;
const ProfileEditPage: React.FC<IProfileEditPageProps> = ({sendForm}) => {
	useEffect(() => {
		document.head.title = 'Профиль';
	}, []);

	return (
		<>
			<div className="title">Редактирование профиля</div>

			<Card className="mr-5">
				<Card.Body>
					<ProfileEditForm onSubmit={console.log}/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>
						<Button variant="warning" onClick={sendForm}>Сохранить</Button>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default connected(ProfileEditPage);
