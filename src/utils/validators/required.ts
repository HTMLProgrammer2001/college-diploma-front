const required = (str: string) => {
	return str ? null : 'Поле обязательно для заполнения'
};

export default required;
