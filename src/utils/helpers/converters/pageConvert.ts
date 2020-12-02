import i18next from 'i18next';


const pageConvert = (val: number, converter: (a: number) => string) => {
	return val != null ? converter(val) : i18next.t("common.notSetted");
};

export default pageConvert;
