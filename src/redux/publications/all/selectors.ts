import {RootState} from '../../';


export const selectAllPublicationsState = (state: RootState) => state.publications.all;
export const selectAllPublications = (state: RootState) => selectAllPublicationsState(state).publications;
export const selectAllPublicationsSort = (state: RootState) => selectAllPublicationsState(state).sort;

export const selectAllPublicationsPagination = (state: RootState) => ({
	pageSize: selectAllPublicationsState(state).pageSize,
	curPage: selectAllPublicationsState(state).currentPage,
	totalItems: selectAllPublicationsState(state).total
});
