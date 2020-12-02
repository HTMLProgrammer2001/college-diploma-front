import codeConverter from './codeConverter';


export enum Qualifications{
	JUNIOR = 0,
	BAKALAVR = 1,
	MAGISTR = 2
}

let qualifications: any = {
	[Qualifications.JUNIOR]: 'common.qualList.0',
	[Qualifications.BAKALAVR]: 'common.qualList.1',
	[Qualifications.MAGISTR]: 'common.qualList.2'
};

export default codeConverter(qualifications);
