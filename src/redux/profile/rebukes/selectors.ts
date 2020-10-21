import {RootState} from '../../';


export const selectProfileRebukesState = (state: RootState) => state.profile.rebukes;

export const selectProfileRebukes = (state: RootState) => (
	selectProfileRebukesState(state).rebukes
);

export const selectProfileRebukesPagination = (state: RootState) => ({
	size: selectProfileRebukesState(state).pageSize,
	curPage: selectProfileRebukesState(state).currentPage,
	total: selectProfileRebukesState(state).total
});

export const selectProfileRebukesSort = (state: RootState) => (
	selectProfileRebukesState(state).sort
);
