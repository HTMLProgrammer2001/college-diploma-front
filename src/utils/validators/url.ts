const url = (value: string) => {
	if(value == null)
		return null;

	return /https?:\/\/.+(\..+)+/.test(value) ? null : 'Неверный формат url';
};

export default url;
