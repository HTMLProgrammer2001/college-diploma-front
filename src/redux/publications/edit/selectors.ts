import {RootState} from '../../index';


export const selectEditPublicationState = (state: RootState) => state.publications.edit;
export const selectEditPublication = (state: RootState) => selectEditPublicationState(state).publication;
