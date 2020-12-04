import phone from './phone';
import i18next from 'i18next';


describe('Test phone validator', () => {
	const validPhones = ['+380666745346', '+380506564229', '0666876892'],
		inValidPhones = ['absr', '0504444f44', '+350506564229', '+0504534221'];

	it('Should return null on empty input', () => {
		expect(phone('')).toBeNull();
	});

	it('Should return null on valid phones', () => {
		validPhones.map(validPhone => {
			expect(phone(validPhone)).toBeNull();
		});
	});

	it('Should return error message on invalid phones', () => {
		inValidPhones.map(inValidPhone => {
			expect(phone(inValidPhone)).toBe(i18next.t('validators.phone'));
		});
	});
});
