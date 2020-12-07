export default (vals: Object): FormData => {
	let formData = new FormData();

	//convert object to form data
	for(let key in vals){
		const val = (vals as any)[key];

		if(val) {
			if (val instanceof Date)
				formData.append(key, val.toISOString());
			else
				formData.append(key, val);
		}
	}

	return formData;
};
