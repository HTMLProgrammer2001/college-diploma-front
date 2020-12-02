import codeConverter from './codeConverter';


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

export default codeConverter(roles);
