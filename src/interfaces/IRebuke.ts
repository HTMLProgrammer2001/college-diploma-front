import {IUserShort} from './IUserShort';


export type IRebuke = {
	id: number,
	title: string,
	date_presentation: string,
	order: string,
	user: IUserShort,
	active: boolean
};
