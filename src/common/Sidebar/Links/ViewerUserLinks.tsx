import React from 'react';
import {Link} from 'react-router-dom';
import {Trans} from 'react-i18next';

import IsUserRoleMore from '../../../utils/HOC/IsUserRoleMore';
import {Roles} from '../../../utils/helpers/RoleCodeToName';
import styles from '../styles.module.scss';


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

		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/honors">
				<Trans i18nKey="layout.sidebar.honors"/>
			</Link>
		</li>

		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/rebukes">
				<Trans i18nKey="layout.sidebar.rebukes"/>
			</Link>
		</li>

		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/educations">
				<Trans i18nKey="layout.sidebar.educations"/>
			</Link>
		</li>

		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/internships">
				<Trans i18nKey="layout.sidebar.internships"/>
			</Link>
		</li>

		<li className={styles.menu__item}>
			<i className="fa fa-user"/>

			<Link to="/qualifications">
				<Trans i18nKey="layout.sidebar.qualifications"/>
			</Link>
		</li>
	</>
);

export default IsUserRoleMore(Roles.VIEWER)(ViewerUserLinks);
