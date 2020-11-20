export type IPublication = {
	id: number,
	title: string,
	description: string,
	date_of_publication: string,
	authors: string,
	authorsList?: Array<{id: number, title: string}>
	publisher?: string,
	url?: string
};
