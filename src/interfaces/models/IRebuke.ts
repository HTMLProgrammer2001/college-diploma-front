import {IUserShort} from './IUserShort';


export type IRebuke = {
	id: number,
	title: string,
	datePresentation: string,
	order: string,
	user: IUserShort,
	active: boolean
};
