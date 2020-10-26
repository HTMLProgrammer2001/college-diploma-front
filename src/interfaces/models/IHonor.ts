import {IUserShort} from './IUserShort';


export type IHonor = {
	id: number,
	order: string,
	datePresentation: string,
	title: string,
	active: boolean,
	user: IUserShort,
	type: string
};
