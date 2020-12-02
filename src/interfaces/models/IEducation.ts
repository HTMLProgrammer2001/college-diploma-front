import {IUserShort} from './IUserShort';


export type IEducation = {
	id: number,
	institution: string,
	graduate_year: number,
	qualification: number,
	user: IUserShort,
	specialty: string
};
