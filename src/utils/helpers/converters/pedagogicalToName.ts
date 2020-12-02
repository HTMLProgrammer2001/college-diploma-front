import codeConverter from './codeConverter';


export enum Pedagogical{
	METHODIST = 0,
	HIGHER = 1
}

let pedagogicals: any = {
	[Pedagogical.METHODIST]: 'common.pedTitles.methodist',
	[Pedagogical.HIGHER]: 'common.pedTitles.higher'
};

export default codeConverter(pedagogicals);
