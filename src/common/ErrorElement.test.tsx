import React from 'react';
import {shallow} from 'enzyme';

import ErrorElement from './ErrorElement';
import i18next from 'i18next';


describe('Test error element', () => {
	it('Test render', () => {
		const wrapper = shallow(<ErrorElement/>);
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Test with error', () => {
		const error = 'ERROR';
		const wrapper = shallow(<ErrorElement error={error}/>);

		expect(wrapper.text()).toBe(error);
	});

	it('Test without error', () => {
		const wrapper = shallow(<ErrorElement/>);
		expect(wrapper.text()).toBe(i18next.t('common.errorOccurred'));
	});
});
