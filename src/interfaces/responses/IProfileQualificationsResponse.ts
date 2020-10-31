import {IGeneralPaginationResponse} from './IGeneralPaginationResponse';
import {IQualification} from '../models/IQualification';


export type IProfileQualificationsResponse = IGeneralPaginationResponse<IQualification> & {
	nextDate: string
};
