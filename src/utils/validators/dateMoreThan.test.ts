import i18next from 'i18next';

import dateMoreThan from './dateMoreThan';


describe('Test date more than validator', () => {
	//data for testing
	const field = 'date',
		moreDate = '21.03.2001',
		lessDate = '19.03.2001',
		values = {
			[field]: '20.03.2001'
		};

	it('Test in not equal mode', () => {
		const errorMessage = i18next.t('validators.dateMore', {field, context: 'equal'});
		const innerHandler = dateMoreThan(field, false);

		//tests
		expect(innerHandler(values[field], values)).toBe(errorMessage);
		expect(innerHandler(moreDate, values)).toBeNull();
		expect(innerHandler(lessDate, values)).toBe(errorMessage);
	});

	it('Test in equal mode', () => {
		const errorMessage = i18next.t('validators.dateMore', {field, context: 'equal'});
		const innerHandler = dateMoreThan(field, true);

		//tests
		expect(innerHandler(values[field], values)).toBeNull();
		expect(innerHandler(moreDate, values)).toBeNull();
		expect(innerHandler(lessDate, values)).toBe(errorMessage);
	});
});
