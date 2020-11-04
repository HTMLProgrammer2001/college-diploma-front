import React from 'react';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import styles from '../styles.module.scss';
import {Link} from 'react-router-dom';
import {Trans} from 'react-i18next';


const ModeratorUserLinks: React.FC<{}> = () => (
	<>
		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/ranks">
				<Trans i18nKey="layout.sidebar.ranks"/>
			</Link>
		</li>

		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/categories">
				<Trans i18nKey="layout.sidebar.categories"/>
			</Link>
		</li>
	</>
);

export default IsUserRoleMore(Roles.MODERATOR)(ModeratorUserLinks);
