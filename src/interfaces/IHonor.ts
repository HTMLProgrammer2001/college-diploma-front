import {IUserShort} from './IUserShort';


export type IHonor = {
	id: number,
	order: string,
	date_presentation: string,
	title: string,
	active: boolean,
	user: IUserShort,
	type: string
};
