import React from 'react';
import {shallow} from 'enzyme';

import BackButton from './BackButton';

//mocks
const mockGoBack = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
		goBack: mockGoBack
	})
}));


describe('Test back button', () => {
	it('Test rendering', () => {
		const backButton = shallow(<BackButton/>);
		expect(backButton.html()).toMatchSnapshot();
	});

	it('Test back button push', () => {
		const backButton = shallow(<BackButton/>);

		//emit click button
		backButton.simulate('click');

		//tests
		expect(mockGoBack).toBeCalledTimes(1);
	});
});
