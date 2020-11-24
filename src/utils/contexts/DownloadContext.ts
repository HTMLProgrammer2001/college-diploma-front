import {createContext} from 'react';


export type IDownloadContextData = {
	event: any,
	setEvent: (val: any) => void
};

const defaultData: IDownloadContextData = {
	event: null,
	setEvent(val: any){}
};

const MenuContext = createContext<IDownloadContextData>(defaultData);

export default MenuContext;
