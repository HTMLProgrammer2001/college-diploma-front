import React, {useContext} from 'react';
import {Row} from 'react-bootstrap';
import {Trans, Translation} from 'react-i18next';

import roleCodeToName from '../../utils/helpers/RoleCodeToName';
import UserProfileContext from '../../utils/contexts/UserProfileContext';


export const ProfileInfo: React.FC<{}> = () => {
	const user = useContext(UserProfileContext);

	return (
		<Row>
			<div className="col-sm-3 mr-3">
				<Translation>
					{(t) => (
						<img src={user.avatar} alt={t("Avatar")} style={{width: '100%'}}/>
					)}
				</Translation>
			</div>

			<Translation>
				{(t) => (
					<div>
						<Trans i18nKey="profile.info.fullName">
							<div>Name: {{fullName: user.fullName}}</div>
						</Trans>

						<Trans i18nKey="profile.info.birthday">
							<div>Birthday: {{birthday: user.birthday || t("common.notSetted")}}</div>
						</Trans>

						<Trans i18nKey="profile.info.email">
							<div>Email: {{email: user.email || t("common.notSetted")}}</div>
						</Trans>

						<Trans i18nKey="profile.info.address">
							<div>Address: {{address: user.address || t("common.notSetted")}}</div>
						</Trans>

						<Trans i18nKey="profile.info.role">
							<div>Role: {{role: roleCodeToName(user.role)}}</div>
						</Trans>

						<Trans i18nKey="profile.info.department">
							<div>Department: {{department: user.department?.name || t("common.notSetted")}}</div>
						</Trans>

						<Trans i18nKey="profile.info.commission">
							<div>Commission: {{commission: user.commission?.name || t("common.notSetted")}}</div>
						</Trans>

						<Trans i18nKey="profile.info.rank">
							<div>Rank: {{rank: user.rank?.name || t("common.notSetted")}}</div>
						</Trans>

						<Trans i18nKey="profile.info.pedagogicalTitle">
							<div>Pedagogical title: {{pedTitle: user.pedagogicalTitle || t("common.notSetted")}}</div>
						</Trans>

						<Trans i18nKey="profile.info.experience">
							<div>Experience: {{experience: user.experience || t("common.notSetted")}}</div>
						</Trans>
					</div>
				)}
			</Translation>
		</Row>
	);
};

export default ProfileInfo;
