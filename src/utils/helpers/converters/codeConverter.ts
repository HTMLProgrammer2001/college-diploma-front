import i18next from 'i18next';


const codeConverter = (codes: any) => {
	return (code: number): string => {
		//get code string and search it in codes array
		let strCode = code.toString();
		return codes[strCode] ? i18next.t(codes[strCode]) : i18next.t('common.notExists');
	}
};

export default codeConverter;
