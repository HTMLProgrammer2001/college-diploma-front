import {ISort} from '../../interfaces/ISort';


export default (rules: ISort[], field: string): ISort => {
	return rules.find((item) => item.field == field);
};
