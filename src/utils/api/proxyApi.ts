import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';


// proxy api calls to add authorization header
let proxyApi = <T extends (c: AxiosInstance) => any>(apiFunc: T, options: AxiosRequestConfig = {}) => {
	let client = axios.create({...options}),
		api = apiFunc(client);

	return new Proxy<ReturnType<T>>(api, {
		get(target: ReturnType<T>, prop: keyof ReturnType<T>) {
			client = axios.create({
				...options,
				headers: {
					'Access-Control-Allow-Origin': '*',
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			});

			return target[prop];
		}
	});
};

export default proxyApi;
