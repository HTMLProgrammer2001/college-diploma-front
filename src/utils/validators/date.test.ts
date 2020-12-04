import i18next from 'i18next';

import date from './date';


describe('Test date validator', () => {
	//data for test
	const validDate = '20.03.2001',
		inValidDate = 'invalid';

	it('Should return null on valid date', () => {
		const result = date(validDate);
		expect(result).toBeNull();
	});

	it('Should return error string on invalid date', () => {
		const result = date(inValidDate);
		expect(result).toBe(i18next.t('validators.date'));
	});

	it('Should return null on empty input', () => {
		const result = date('');
		expect(result).toBeNull();
	});
});
