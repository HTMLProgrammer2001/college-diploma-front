import {createContext} from 'react';


export type IMenuContextData = {
	isOpen: boolean,
	changeOpen: (val: boolean) => void
};

const defaultData: IMenuContextData = {
	isOpen: false,
	changeOpen(val: boolean){}
};

const MenuContext = createContext<IMenuContextData>(defaultData);

export default MenuContext;
