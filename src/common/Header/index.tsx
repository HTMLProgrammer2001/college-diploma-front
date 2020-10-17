import React, {useContext, useState} from 'react';

import Burger from './Burger';
import UserDropdown from './UserDropdown';
import MenuContext from '../../utils/contexts/MenuContext';


const Header: React.FC<{}> = () => {
	const {isOpen, changeOpen} = useContext(MenuContext);

	return (
		<header className="bg-blue px-3 d-flex justify-content-between align-items-center" style={{height: '60px'}}>
			<Burger isOpen={isOpen} handler={() => changeOpen(!isOpen)}/>
			<UserDropdown/>
		</header>
	);
};

export default Header;
