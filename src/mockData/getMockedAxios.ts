import axios from 'axios';

jest.mock('axios', () => {
	return {
		interceptors: {
			request: { use: jest.fn(), eject: jest.fn() },
			response: { use: jest.fn(), eject: jest.fn() },
		},
		create(){return this}
	};
});

const mockedAxios = axios as jest.Mocked<typeof axios>;

const getMockedAxios = () => {
	mockedAxios.get = jest.fn();
	mockedAxios.post = jest.fn();
	mockedAxios.put = jest.fn();
	mockedAxios.delete = jest.fn();

	return mockedAxios;
};

export default getMockedAxios;
