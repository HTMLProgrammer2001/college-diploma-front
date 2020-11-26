import i18next from 'i18next';


export enum Roles{
	JUNIOR = 0,
	BAKALAVR = 1,
	MAGISTR = 2
}

let qualifications: any = {
	[Roles.JUNIOR]: 'profile.tabs.educations.qualList.1',
	[Roles.BAKALAVR]: 'profile.tabs.educations.qualList.2',
	[Roles.MAGISTR]: 'profile.tabs.educations.qualList.3'
};

const qualificationToName = (id: number): string => {
	let strCode = id.toString();
	return qualifications[strCode] ? i18next.t(qualifications[strCode]) : i18next.t('common.notExists');
};

export default qualificationToName;
