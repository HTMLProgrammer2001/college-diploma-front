const debounce = (fn: Function, delay: number): any => {
	let timer: any = null;

	return (...args: any[]) => {
		if(timer)
			clearTimeout(timer);

		timer = setTimeout(() => {
			fn(...args);
		}, delay);
	};
};

export default debounce;
