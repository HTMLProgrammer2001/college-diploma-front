import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';

import BackButton from '../../common/BackButton';
import ProfileEditForm from './EditProfileForm';


const ProfileEditPage: React.FC<{}> = () => {
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
						<Button variant="warning">Сохранить</Button>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default ProfileEditPage;
