import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import styles from '../styles.module.scss';


const ModeratorUserLinks: React.FC<{}> = () => {
	const {t} = useTranslation();

	return (
		<>
			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/ranks">
					{t('layout.sidebar.ranks')}
				</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/categories">
					{t('layout.sidebar.categories')}
				</Link>
			</li>
		</>
	);
};

export default IsUserRoleMore(Roles.MODERATOR)(ModeratorUserLinks);
