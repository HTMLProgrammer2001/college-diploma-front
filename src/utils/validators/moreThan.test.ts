import moreThan from './moreThan';
import i18next from 'i18next';


describe('Test more than validator', () => {
	//data for testing
	const field = 'value',
		more = '21',
		less = '19',
		values = {
			[field]: '20'
		};

	it('Test in not equal mode', () => {
		const errorMessage = i18next.t('validators.moreThan', {field, context: 'equal'});
		const innerHandler = moreThan(field, false);

		//tests
		expect(innerHandler(values[field], values)).toBe(errorMessage);
		expect(innerHandler(more, values)).toBeNull();
		expect(innerHandler(less, values)).toBe(errorMessage);
	});

	it('Test in equal mode', () => {
		const errorMessage = i18next.t('validators.moreThan', {field, context: 'equal'});
		const innerHandler = moreThan(field, true);

		//tests
		expect(innerHandler(values[field], values)).toBeNull();
		expect(innerHandler(more, values)).toBeNull();
		expect(innerHandler(less, values)).toBe(errorMessage);
	});
});
