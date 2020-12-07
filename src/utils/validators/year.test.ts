import year from './year';
import i18next from 'i18next';


describe('Test year validator', () => {
	it('Should return null on empty input', () => {
		expect(year('')).toBeNull();
	});

	it('Should return null on year of last century', () => {
		expect(year('2001')).toBeNull();
		expect(year('1936')).toBeNull();
		expect(year('2020')).toBeNull();
	});

	it('Should return error message on not numbers', () => {
		expect(year('test')).toBe(i18next.t('validators.number'));
		expect(year('a2001')).toBe(i18next.t('validators.number'));
	});

	it('Should return error message on future year or very old year', () => {
		expect(year('1100')).toBe(i18next.t('validators.year'));
		expect(year('2030')).toBe(i18next.t('validators.year'));
		expect(year('1915')).toBe(i18next.t('validators.year'));
	});
});
