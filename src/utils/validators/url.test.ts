import url from './url';
import i18next from 'i18next';


describe('Test url validator', () => {
	it('Should return null on empty input', () => {
		const result = url('');
		expect(result).toBeNull();
	});

	it('Should return null on normal url', () => {
		expect(url('https://htmlprogrammer.ru')).toBeNull();
		expect(url('http://htmlprogrammer.ru')).toBeNull();
	});

	it('Should return error on invalid url', () => {
		expect(url('ava://htmlprogrammer.ru')).toBe(i18next.t('validators.url'));
		expect(url('http:/htmlprogrammer.ru')).toBe(i18next.t('validators.url'));
	});
});
