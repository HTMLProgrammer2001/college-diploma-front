import {RootState} from '../../';


export const selectProfileHonorsState = (state: RootState) => state.profile.honors;

export const selectProfileHonors = (state: RootState) => (
	selectProfileHonorsState(state).honors
);

export const selectProfileHonorsPagination = (state: RootState) => ({
	size: selectProfileHonorsState(state).pageSize,
	curPage: selectProfileHonorsState(state).currentPage,
	total: selectProfileHonorsState(state).total
});

export const selectProfileHonorsSort = (state: RootState) => (
	selectProfileHonorsState(state).sort
);
