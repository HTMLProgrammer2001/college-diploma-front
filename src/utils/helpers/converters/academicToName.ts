import codeConverter from './codeConverter';


export enum Academic{
	CANDIDATE = 0,
	DOCTOR = 1
}

let academics: any = {
	[Academic.CANDIDATE]: 'common.academicStatus.candidate',
	[Academic.DOCTOR]: 'common.academicStatus.doctor'
};

export default codeConverter(academics);
