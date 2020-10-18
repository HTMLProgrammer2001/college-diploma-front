import {RootState} from '../../index';


export const selectPublicationsShowState = (state: RootState) => state.publications.show;
export const selectPublicationsShow = (state: RootState) => state.publications.show.publications;

export const selectPublicationsPagination = (state: RootState) => ({
	size: state.publications.show.pageSize,
	curPage: state.publications.show.currentPage,
	total: state.publications.show.total
});

export const selectPublicationsSort = (state: RootState) => state.publications.show.sort;
