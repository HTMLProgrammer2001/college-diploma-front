import {IGeneralPaginationResponse} from './IGeneralPaginationResponse';
import {IInternship} from '../models/IInternship';


export type IProfileInternshipsResponse = IGeneralPaginationResponse<IInternship> & {hours: number};
