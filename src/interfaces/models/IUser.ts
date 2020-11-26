import {ICommission} from './ICommission';
import {IDepartment} from './IDepartment';
import {IRank} from './IRank';


export type IUser = {
	id: number,
	fullName: string,
	birthday?: string,
	email: string,
	address?: string,
	phone?: string,
	role: number,
	avatar?: string,
	experience: number,
	pedagogicalTitle?: string,
	academicStatus?: string,
	academicStatusYear?: number,
	scientificDegree?: string,
	scientificDegreeYear?: number,
	category?: string,
	commission: ICommission,
	department: IDepartment,
	rank?: IRank
};
