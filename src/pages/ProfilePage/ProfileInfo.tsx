import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Row} from 'react-bootstrap';
import {Trans, Translation} from 'react-i18next';

import {RootState} from '../../redux';
import {selectMeInfo} from '../../redux/me/selectors';
import roleCodeToName from '../../utils/helpers/RoleCodeToName';


const mapStateToProps = (state: RootState) => ({
	me: selectMeInfo(state)
});

const connected = connect(mapStateToProps, null);

type IProfileInfoProps = ConnectedProps<typeof connected>;
export const ProfileInfo: React.FC<IProfileInfoProps> = ({me}) => (
	<Row>
		<div className="col-sm-3 mr-3">
			<Translation>
				{(t) => (
					<img
						src={me.avatar || 'http://127.0.0.1:8000/storage/avatars/default.gif'}
						alt={t("Avatar")}
						style={{width: '100%'}}
					/>
				)}
			</Translation>
		</div>

		<Translation>
			{(t) => (
				<div>
					<Trans i18nKey="profile.info.fullName">
						<div>Name: {{fullName: me.fullName}}</div>
					</Trans>

					<Trans i18nKey="profile.info.birthday">
						<div>Birthday: {{birthday: me.birthday || t("common.notSetted")}}</div>
					</Trans>

					<Trans i18nKey="profile.info.email">
						<div>Email: {{email: me.email || t("common.notSetted")}}</div>
					</Trans>

					<Trans i18nKey="profile.info.address">
						<div>Address: {{address: me.address || t("common.notSetted")}}</div>
					</Trans>

					<Trans i18nKey="profile.info.role">
						<div>Role: {{role: roleCodeToName(me.role)}}</div>
					</Trans>

					<Trans i18nKey="profile.info.department">
						<div>Department: {{department: me.department?.name || t("common.notSetted")}}</div>
					</Trans>

					<Trans i18nKey="profile.info.commission">
						<div>Commission: {{commission: me.commission?.name || t("common.notSetted")}}</div>
					</Trans>

					<Trans i18nKey="profile.info.rank">
						<div>Rank: {{rank: me.rank?.name || t("common.notSetted")}}</div>
					</Trans>

					<Trans i18nKey="profile.info.pedagogicalTitle">
						<div>Pedagogical title: {{pedTitle: me.pedagogicalTitle || t("common.notSetted")}}</div>
					</Trans>

					<Trans i18nKey="profile.info.experience">
						<div>Experience: {{experience: me.experience || t("common.notSetted")}}</div>
					</Trans>
				</div>
			)}
		</Translation>
	</Row>
);

export default connected(ProfileInfo);
