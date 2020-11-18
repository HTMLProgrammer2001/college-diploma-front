export default (vals: Object): FormData => {
	let formData = new FormData();

	for(let key in vals){
		formData.append(key, (vals as any)[key]);
	}

	return formData;
};
