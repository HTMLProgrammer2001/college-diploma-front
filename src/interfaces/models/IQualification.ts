import {IUserShort} from './IUserShort';


export type IQualification = {
	id: number,
	name: number,
	date: string,
	description?: string,
	user: IUserShort
};
