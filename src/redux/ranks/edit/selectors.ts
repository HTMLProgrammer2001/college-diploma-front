import {RootState} from '../../index';


export const selectEditRankState = (state: RootState) => state.ranks.edit;
export const selectEditRank = (state: RootState) => selectEditRankState(state).rank;
