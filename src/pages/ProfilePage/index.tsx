import React, {useEffect} from 'react';
import {Button, Card, Row} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {connect, ConnectedProps} from 'react-redux';

import ProfileInfo from './ProfileInfo';
import ProfileTabs from './ProfileTabs';
import BackButton from '../../common/BackButton';
import UserProfileContext from '../../utils/contexts/UserProfileContext';
import Loader from '../../common/Loader/Loader';
import ErrorElement from '../../common/ErrorElement';

import {RootState} from '../../redux';
import {selectMeInfo} from '../../redux/me/selectors';
import {selectProfileUserState} from '../../redux/profile/userInfo/selectors';
import thunkProfileUser from '../../redux/profile/userInfo/thunks';


const mapStateToProps = (state: RootState) => ({
	me: selectMeInfo(state),
	userProfile: selectProfileUserState(state)
});

const connected = connect(mapStateToProps, {
	loadUserProfile: thunkProfileUser
});

type IOwnProps = {
	isProfile?: boolean,
	userID?: number
}

type IProfilePageProps = ConnectedProps<typeof connected> & IOwnProps;
const ProfilePage: React.FC<IProfilePageProps> = (props) => {
	const {me, userID, isProfile, userProfile, loadUserProfile} = props;
	const {t} = useTranslation();

	useEffect(() => {
		document.title = t('profile.pageTitle');

		if(!isProfile && userID)
			loadUserProfile(userID);
	}, []);

	if(userProfile.isLoading || !(isProfile ? me : userProfile.user))
		return <Loader/>;

	if(userProfile.error)
		return <ErrorElement error={userProfile.error}/>;

	return (
		<UserProfileContext.Provider value={isProfile ? me : userProfile.user}>
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
		</UserProfileContext.Provider>
	);
};

export default connected(ProfilePage);
