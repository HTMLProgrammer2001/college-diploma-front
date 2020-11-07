import {IUserShort} from './IUserShort';


export type IEducation = {
	id: number,
	institution: string,
	graduate_year: number,
	qualification: string,
	user: IUserShort,
	specialty: string
};
