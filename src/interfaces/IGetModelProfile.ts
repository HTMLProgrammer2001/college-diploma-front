import {ISort} from './ISort';


export type IGetModelProfile<T> = {
	filters: T,
	sort: ISort[],
	user: number,
	page?: number,
	pageSize?: number
};
