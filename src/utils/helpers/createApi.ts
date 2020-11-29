import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import i18next from 'i18next';


let createApi = (options: AxiosRequestConfig): AxiosInstance => {
	console.log(options);

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

	return api;
};

export default createApi;
