import {ICategory} from './ICategory';
import {IPlace} from './IPlace';


export type IInternship = {
	id: number,
	category: ICategory,
	place?: IPlace,
	user: any,
	title: string,
	from: string,
	to: string,
	hours: number,
	credits?: number,
	code?: string
};
