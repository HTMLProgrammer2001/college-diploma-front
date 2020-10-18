import React, {useContext} from 'react';
import cn from 'classnames';
import {Link} from 'react-router-dom';

import styles from './styles.module.scss';
import MenuContext from '../../utils/contexts/MenuContext';


const Sidebar: React.FC<{}> = () => {
	const {isOpen} = useContext(MenuContext);

	return (
		<aside className={cn(styles.sidebar, {[styles.active]: isOpen})}>
			<div className={styles.bg}/>

			<div className={cn(styles.logo, "center")}>
				{!isOpen ? "TRT" : "TrackTeacher"}
			</div>

			<div className={styles.user}>
				<img
					src="http://127.0.0.1:8000/storage/avatars/default.gif"
					alt="Avatar"
				/>

				<div>
					Yuri Prisyazhny
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

export default Sidebar;
