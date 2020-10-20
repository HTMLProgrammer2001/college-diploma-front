import React, {useContext} from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';
import {connect, ConnectedProps} from 'react-redux';

import styles from './styles.module.scss';
import MenuContext from '../../utils/contexts/MenuContext';
import {RootState} from '../../redux';
import {selectMeInfo} from '../../redux/me/selectors';


const mapStateToProps = (state: RootState) => ({
	user: selectMeInfo(state)
});

const connected = connect(mapStateToProps);

type ISidebarProps = ConnectedProps<typeof connected>;
const Sidebar: React.FC<ISidebarProps> = ({user}) => {
	const {isOpen} = useContext(MenuContext);

	return (
		<aside className={cn(styles.sidebar, {[styles.active]: isOpen})}>
			<div className={styles.bg}/>

			<div className={cn(styles.logo, "center")}>
				{!isOpen ? "TRT" : "TrackTeacher"}
			</div>

			<div className={styles.user}>
				<img
					src={user.avatar}
					alt="Avatar"
				/>

				<div>
					{user.fullName}
				</div>
			</div>

			<div className={styles.header}>
				Навигационное меню
			</div>

			<ul className={styles.menu}>
				<li className={styles.menu__item}>
					<i className="fa fa-dashboard"/>
					<Link to="/">Админ панель</Link>
				</li>

				<li className={styles.menu__item}>
					<i className="fa fa-user"/>
					<Link to="/profile">Профиль</Link>
				</li>

				<li className={styles.menu__item}>
					<i className="fa fa-user"/>
					<Link to="/publications">Публикации</Link>
				</li>
			</ul>
		</aside>
	);
};

export default connected(Sidebar);
