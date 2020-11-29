import {IExample} from '../../interfaces/IExample';
import axios, {AxiosRequestConfig} from 'axios';
import createApi from './createApi';


const download = (path: string, options: AxiosRequestConfig = {}): IExample => {
	const client = createApi({});

	//create token
	const cancelToken = axios.CancelToken.source();

	//get response
	const response = client.get(path, {
		responseType: 'blob',
		cancelToken: cancelToken.token,
		...options
	});

	return {response, cancelToken};
};

export default download;
