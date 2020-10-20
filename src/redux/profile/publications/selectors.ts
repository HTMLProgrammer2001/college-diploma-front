import {RootState} from '../../index';


export const selectProfilePublicationsState = (state: RootState) => state.profile.publications;

export const selectProfilePublications = (state: RootState) => (
	selectProfilePublicationsState(state).publications
);

export const selectProfilePublicationsPagination = (state: RootState) => ({
	size: selectProfilePublicationsState(state).pageSize,
	curPage: selectProfilePublicationsState(state).currentPage,
	total: selectProfilePublicationsState(state).total
});

export const selectProfilePublicationsSort = (state: RootState) => (
	selectProfilePublicationsState(state).sort
);
