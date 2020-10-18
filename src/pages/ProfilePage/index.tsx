import React from 'react';
import {Button, Card, Row} from 'react-bootstrap';

import ProfileInfo from './ProfileInfo';
import ProfileTabs from './ProfileTabs';
import BackButton from '../../common/BackButton';


const ProfilePage: React.FC<{}> = () => (
	<>
		<div className="title">Профіль користувача</div>

		<Card>
			<Card.Body>
				<ProfileInfo/>
				<ProfileTabs/>
			</Card.Body>

			<Card.Footer>
				<Row className="justify-content-between p-2">
					<BackButton/>
					<Button variant="warning">Редактировать</Button>
				</Row>
			</Card.Footer>
		</Card>
	</>
);

export default ProfilePage;
