import sameAs from './sameAs';
import i18next from 'i18next';


describe('Test same as validator', () => {
	const field = 'value',
		data = 'data',
		inCorrectData = 'data2',
		values = {[field]: data};

	const inner = sameAs(field);

	it('Should return null on empty input', () => {
		expect(inner('', values)).toBeNull();
	});

	it('Should return null on same input', () => {
		expect(inner(data, values)).toBeNull();
	});

	it('Should return error message on not same input', () => {
		expect(inner(inCorrectData, values)).toBe(i18next.t('validators.sameAs', {field}));
	});
});
