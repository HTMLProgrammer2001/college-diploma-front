import codeConverter from './codeConverter';


export enum Scientific{
	DOCENT = 0,
	SEARCHER = 1,
	PROFESSOR = 2
}

let scientifics: any = {
	[Scientific.DOCENT]: 'common.scientific.docent',
	[Scientific.SEARCHER]: 'common.scientific.searcher',
	[Scientific.PROFESSOR]: 'common.scientific.professor',
};

export default codeConverter(scientifics);
