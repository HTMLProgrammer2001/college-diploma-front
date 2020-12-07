import email from './email';
import i18next from 'i18next';


describe('Test email validator', () => {
	const correctEmails = ['cssuperpy@gmail.com', 'cs3442@mail.ru', 'oxana.prisyazhne@gmail.com'],
		inCorrectEmails = ['test', 'bademail@f', 'cssuperpy@gmail.'];

	const errorMsg = i18next.t('validators.email');

	it('Should return null on empty input', () => {
		const result = email('');
		expect(result).toBeNull();
	});

	it('Should return null on normal emails', () => {
		correctEmails.map(correctEmail => {
			const result = email(correctEmail);
			expect(result).toBeNull();
		});
	});

	it('Should return error on invalid emails', () => {
		inCorrectEmails.map(inCorrectEmail => {
			const result = email(inCorrectEmail);
			expect(result).toBe(errorMsg);
		});
	});
});
