import i18next from 'i18next';


export enum Categories{
	SPECIALTY = 0,
	SECOND = 1,
	FIRST = 2,
	HIGHER = 3
}

let qualifications: any = {
	[Categories.SPECIALTY]: 'common.categories.0',
	[Categories.SECOND]: 'common.categories.1',
	[Categories.FIRST]: 'common.categories.2',
	[Categories.HIGHER]: 'common.categories.3'
};

const categoriesCodeToName = (id: number): string => {
	let strCode = id.toString();
	return qualifications[strCode] ? i18next.t(qualifications[strCode]) : i18next.t('common.notExists');
};

export default categoriesCodeToName;
