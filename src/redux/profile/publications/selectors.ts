import {RootState} from '../../index';


export const selectProfilePublicationsState = (state: RootState) => state.profile.publications;

export const selectProfilePublications = (state: RootState) => (
	selectProfilePublicationsState(state).publications
);

export const selectProfilePublicationsPagination = (state: RootState) => ({
	pageSize: selectProfilePublicationsState(state).pageSize,
	curPage: selectProfilePublicationsState(state).currentPage,
	totalItems: selectProfilePublicationsState(state).total
});

export const selectProfilePublicationsSort = (state: RootState) => (
	selectProfilePublicationsState(state).sort
);
