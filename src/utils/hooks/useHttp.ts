import axios, {Method} from 'axios';
import {useCallback, useState} from 'react';


type IHttpHandlerOptions = {
	url: string,
	method?: Method,
	headers?: Object,
	data?: Object
}

const useHttp = <T>() => {
	const [isLoading, setLoading] = useState(false);
	const [error, setError] = useState<string>(null);
	const [data, setData] = useState<T>(null);

	const handler = useCallback(async ({url, headers, method, data}: IHttpHandlerOptions) => {
		setLoading(true);

		try {
			await new Promise(res => {
				setTimeout(res, 3000);
			});

			const resp = await axios.request<T>({
				method, url, params: data, headers: {
					...headers,
					Authorization: `Bearer ${localStorage.getItem('token')}`,
					'Access-Control-Allow-Origin': '*'
				}
			});

			setData(resp.data);
		} catch (e) {
			setError(e.response?.data.message || e.message);
		} finally {
			setLoading(false);
		}
	}, [isLoading, error, data]);

	return {isLoading, error, data, request: handler};
};

export default useHttp;
