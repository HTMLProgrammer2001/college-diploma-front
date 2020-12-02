import codeConverter from './codeConverter';


export enum Categories{
	SPECIALTY = 0,
	SECOND = 1,
	FIRST = 2,
	HIGHER = 3
}

let categories: any = {
	[Categories.SPECIALTY]: 'common.categories.0',
	[Categories.SECOND]: 'common.categories.1',
	[Categories.FIRST]: 'common.categories.2',
	[Categories.HIGHER]: 'common.categories.3'
};

export default codeConverter(categories);
