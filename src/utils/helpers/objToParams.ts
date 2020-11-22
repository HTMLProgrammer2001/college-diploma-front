export default (data: Object | Array<any>, name?: string): Object => {
	let sortRules: any = {};

	if(Array.isArray(data)){
		data.forEach((item, index) => {
			let key = name ? `${name}[${index}]` : index;
			sortRules[key] = item;
		});

		return sortRules;
	}

	else if(data instanceof Object){
		for(let objKey in data){
			let key = name ? `${name}[${objKey}]` : objKey;
			sortRules[key] = (data as any)[objKey];
		}

		return sortRules;
	}
};
