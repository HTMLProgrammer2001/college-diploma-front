import {ICategory} from './ICategory';
import {IPlace} from './IPlace';
import {IUserShort} from './IUserShort';


export type IInternship = {
	id: number,
	category: ICategory,
	place?: IPlace,
	user: IUserShort,
	title: string,
	from: string,
	to: string,
	hours: number,
	credits?: number,
	code?: string
};
