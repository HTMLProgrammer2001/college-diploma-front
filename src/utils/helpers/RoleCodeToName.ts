import i18next from 'i18next';


export enum Roles{
	ADMIN = 1,
	MODERATOR = 10,
	VIEWER = 30,
	USER = 50
}

let roles: any = {
	[Roles.ADMIN]: 'common.roles.admin',
	[Roles.MODERATOR]: 'common.roles.moderator',
	[Roles.VIEWER]: 'common.roles.viewer',
	[Roles.USER]: 'common.roles.user'
};

const roleCodeToName = (code: number): string => {
	let strCode = code.toString();
	return roles[strCode] ? i18next.t(roles[strCode]) : i18next.t('common.roles.noRole');
};

export default roleCodeToName;
