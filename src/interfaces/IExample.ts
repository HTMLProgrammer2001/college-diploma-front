import {AxiosResponse, CancelTokenSource} from 'axios';


export type IExample = {
	response: Promise<AxiosResponse>,
	cancelToken: CancelTokenSource
};
