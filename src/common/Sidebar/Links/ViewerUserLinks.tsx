import React from 'react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/converters/RoleCodeToName';
import styles from '../styles.module.scss';


const ViewerUserLinks: React.FC<{}> = () => {
	const {t} = useTranslation();

	return (
		<>
			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/departments">
					{t('layout.sidebar.departments')}
				</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/commissions">
					{t('layout.sidebar.commissions')}
				</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/publications">
					{t('layout.sidebar.publications')}
				</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/honors">
					{t('layout.sidebar.honors')}
				</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/rebukes">
					{t('layout.sidebar.rebukes')}
				</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/educations">
					{t('layout.sidebar.educations')}
				</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/internships">
					{t('layout.sidebar.internships')}
				</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/qualifications">
					{t('layout.sidebar.qualifications')}
				</Link>
			</li>

			<li className={styles.menu__item}>
				<i className="fa fa-user"/>

				<Link to="/users">
					{t('layout.sidebar.users')}
				</Link>
			</li>
		</>
	);
};

export default IsUserRoleMore(Roles.VIEWER)(ViewerUserLinks);
