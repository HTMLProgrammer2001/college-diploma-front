import {IUserShort} from './IUserShort';


export type IQualification = {
	id: number,
	name: string,
	date: string,
	description?: string,
	user: IUserShort
};
