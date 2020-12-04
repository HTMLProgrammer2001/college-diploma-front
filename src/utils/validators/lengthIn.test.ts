import lengthIn from './lengthIn';
import i18next from 'i18next';


describe('Test length in validator', () => {
	it('Should throw error when min is greater than max', () => {
		expect(() => lengthIn(20, 10)).toThrow(Error);
		expect(() => lengthIn(20, 10)).toThrowError('Min must be less than max');
	});

	it('Should return null when value length between min and max', () => {
		const inner = lengthIn(4, 8);

		expect(inner('1234')).toBeNull();
		expect(inner('123434')).toBeNull();
		expect(inner('12343456')).toBeNull();
	});

	it('Should return error message when value length not between min and max', () => {
		const inner = lengthIn(4, 8),
			errMsg = i18next.t('validators.lengthIn', {context: 'both', min: 4, max: 8});

		expect(inner('12')).toBe(errMsg);
		expect(inner('12343456fdf')).toBe(errMsg);
	});
});
