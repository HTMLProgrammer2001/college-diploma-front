import React, {useContext} from 'react';
import cn from 'classnames';

import Burger from './Burger';
import UserDropdown from './UserDropdown';
import MenuContext from '../../utils/contexts/MenuContext';

import styles from './styles.module.scss';


const Header: React.FC<{}> = () => {
	const {isOpen, changeOpen} = useContext(MenuContext);

	return (
		<header className={cn("bg-blue", styles.header)}>
			<Burger isOpen={isOpen} handler={() => changeOpen(!isOpen)}/>
			<UserDropdown/>
		</header>
	);
};

export default Header;
