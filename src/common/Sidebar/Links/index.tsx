import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import styles from '../styles.module.scss';
import ViewerLinks from './ViewerUserLinks';
import ModeratorLinks from './ModeratorUserLinks';
import AdminUserLinks from './AdminUserLinks';


const Links: React.FC<{}> = () => {
	const {t} = useTranslation();

	return (
		<ul className={styles.menu}>
			<li className={styles.menu__item}>
				<i className="fa fa-dashboard"/>
				<Link to="/">{t('layout.sidebar.admin')}</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>
				<Link to="/profile">{t('layout.sidebar.profile')}</Link>
			</li>

			<ViewerLinks/>
			<ModeratorLinks/>
			<AdminUserLinks/>
		</ul>
	);
};

export default Links;
