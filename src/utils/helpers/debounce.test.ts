import debounce from './debounce';


describe('Debounce test', () => {
	const fn = jest.fn(),
		args = [1, 'test'];

	it('Should call fn after 500 ms', () => {
		jest.useFakeTimers();

		//call fn
		const handler = debounce(fn, 500);
		handler(...args);

		//test that called setTimeout
		expect(setTimeout).toBeCalledTimes(1);

		//fast timers
		jest.runAllTimers();

		//test fn call
		expect(fn).toBeCalledTimes(1);
		expect(fn).toBeCalledWith(...args);
	});

	it('Should stop timer on repeat call', () => {
		jest.useFakeTimers();

		//call fn
		const handler = debounce(fn, 500);
		handler();

		//test that called setTimeout
		expect(setTimeout).toBeCalledTimes(1);

		//test that old timer was stopped
		handler(...args);
		expect(clearTimeout).toBeCalledTimes(1);
		expect(setTimeout).toBeCalledTimes(2);

		jest.runAllTimers();

		expect(fn).toBeCalledWith(...args);
	});
});
