import React, {useContext} from 'react';
import cn from 'classnames';
import {connect, ConnectedProps} from 'react-redux';
import {useTranslation} from 'react-i18next';

import styles from './styles.module.scss';
import MenuContext from '../../utils/contexts/MenuContext';
import {RootState} from '../../redux';
import {selectMeInfo} from '../../redux/me/selectors';
import Links from './Links/';


const mapStateToProps = (state: RootState) => ({
	user: selectMeInfo(state)
});

const connected = connect(mapStateToProps);

type ISidebarProps = ConnectedProps<typeof connected>;
const Sidebar: React.FC<ISidebarProps> = ({user}) => {
	const {isOpen} = useContext(MenuContext);
	const {t} = useTranslation();

	return (
		<aside className={cn(styles.sidebar, {[styles.active]: isOpen})}>
			<div className={styles.bg}/>

			<div className={cn(styles.logo, "center")}>
				{!isOpen ? "TRT" : "TrackTeacher"}
			</div>

			<div className={styles.user}>
				<img
					src={user.avatar}
					alt={t('common.avatar')}
				/>

				<div>
					{user.fullName}
				</div>
			</div>

			<div className={styles.header}>
				{t('layout.sidebar.menu')}
			</div>

			<Links/>
		</aside>
	);
};

export default connected(Sidebar);
