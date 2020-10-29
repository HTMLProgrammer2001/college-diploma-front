import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import ProfileInfo from './ProfileInfo';
import ProfileTabs from './ProfileTabs';
import BackButton from '../../common/BackButton';


const ProfilePage: React.FC<{}> = () => {
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('profile.pageTitle');
	}, []);

	return (
		<>
			<div className="title">{t("profile.pageLabel")}</div>

			<Card className="mr-5">
				<Card.Body>
					<ProfileInfo/>
					<ProfileTabs/>
				</Card.Body>

				<Card.Footer>
					<Row className="justify-content-between p-2">
						<BackButton/>

						<Link to="/profile/edit">
							<Button variant="warning">{t("common.edit")}</Button>
						</Link>
					</Row>
				</Card.Footer>
			</Card>
		</>
	);
};

export default ProfilePage;
