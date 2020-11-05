import {RootState} from '../../';


export const selectPublicationSingleState = (state: RootState) => state.publications.single;
export const selectPublicationSingle = (state: RootState) => selectPublicationSingleState(state).publication;
