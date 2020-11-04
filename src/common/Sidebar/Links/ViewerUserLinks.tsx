import React from 'react';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import styles from '../styles.module.scss';
import {Link} from 'react-router-dom';
import {Trans} from 'react-i18next';


const ViewerUserLinks: React.FC<{}> = () => (
	<>
		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/departments">
				<Trans i18nKey="layout.sidebar.departments"/>
			</Link>
		</li>

		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/commissions">
				<Trans i18nKey="layout.sidebar.commissions"/>
			</Link>
		</li>

		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/publications">
				<Trans i18nKey="layout.sidebar.publications"/>
			</Link>
		</li>
	</>
);

export default IsUserRoleMore(Roles.VIEWER)(ViewerUserLinks);
