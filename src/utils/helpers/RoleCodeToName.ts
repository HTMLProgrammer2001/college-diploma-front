let roles: any = {
	'1': 'Администратор',
	'50': 'Пользователь'
};

const roleCodeToName = (code: number): string => {
	let strCode = code.toString();

	return roles[strCode] ? roles[strCode] : "Не найдено такой роли";
};

export default roleCodeToName;
