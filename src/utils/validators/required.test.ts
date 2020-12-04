import required from './required';
import i18next from 'i18next';


describe('Test required validator', () => {
	it('Should return error on empty input', () => {
		expect(required('')).toBe(i18next.t('validators.required'));
	});

	it('Should return null on value', () => {
		expect(required('test')).toBeNull();
	});
});
