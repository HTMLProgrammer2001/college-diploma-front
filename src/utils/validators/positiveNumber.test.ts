import positiveNumber from './positiveNumber';
import i18next from 'i18next';


describe('Test positive number validator', () => {
	const errMsg = i18next.t('validators.positive');

	it('Should return null on empty input', () => {
		expect(positiveNumber('')).toBeNull();
	});

	it('Should return null on positive numbers', () => {
		expect(positiveNumber('1')).toBeNull();
		expect(positiveNumber('12')).toBeNull();
		expect(positiveNumber('102')).toBeNull();
	});

	it('Should return error message on not a number', () => {
		expect(positiveNumber('test')).toBe(errMsg);
		expect(positiveNumber('0?3233')).toBe(errMsg);
		expect(positiveNumber('1ffff')).toBe(errMsg);
	});

	it('Should return error message on negative number', () => {
		expect(positiveNumber('-1')).toBe(errMsg);
		expect(positiveNumber('-80')).toBe(errMsg);
		expect(positiveNumber('-12')).toBe(errMsg);
	});
});
