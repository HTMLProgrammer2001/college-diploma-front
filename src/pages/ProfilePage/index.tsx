import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';

import ProfileInfo from './ProfileInfo';
import ProfileTabs from './ProfileTabs';
import BackButton from '../../common/BackButton';


const ProfilePage: React.FC<{}> = () => {
	useEffect(() => {
		document.head.title = 'Профиль';
	}, []);

	return (
		<>
			<div className="title">Профиль пользователя</div>

			<Card>
				<Card.Body>
					<ProfileInfo/>
					<ProfileTabs/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Link to="/profile/edit">
							<Button variant="warning">Редактировать</Button>
						</Link>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default ProfilePage;
