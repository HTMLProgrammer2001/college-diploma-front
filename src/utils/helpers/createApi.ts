import axios, {AxiosError, AxiosInstance, AxiosRequestConfig} from 'axios';
import i18next from 'i18next';

import store from '../../redux';
import {appSetError} from '../../redux/app/actions';


let createApi = (options: AxiosRequestConfig): AxiosInstance => {
	//create instance
	const api = axios.create({
		...options,
		baseURL: `${process.env.REACT_APP_SERVER_URL}${options.baseURL || '/'}`
	});

	api.interceptors.request.use((config) => {
		//set default headers
		config.headers['Accept-Control-Allow-Origin'] = '*';
		config.headers['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
		config.headers['Locale'] = i18next.language;

		return config;
	});

	//error handler
	api.interceptors.response.use((resp) => resp,
		(error: AxiosError) => {
		//set errors on not found, unauthorized and server error
		if([403, 404, 500].includes(error.response.status) && error.config.method != 'delete')
			store.dispatch(appSetError(403, error.response.statusText));

		return Promise.reject(error);
	});

	return api;
};

export default createApi;
