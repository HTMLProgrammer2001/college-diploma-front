import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';


type IBurgerProps = {
	isOpen: boolean,
	handler: () => void
};

const Burger: React.FC<IBurgerProps> = ({isOpen, handler}) => (
	<div className={cn(styles.burger, {[styles.active]: isOpen})} onClick={handler}>
		<span/>
		<span/>
		<span/>
	</div>
);

export default Burger;
