import React from 'react';
import {shallow} from 'enzyme';

import SortItem from './SortItem';


describe('Test sort item element', () => {
	it('Test render', () => {
		const wrapper = shallow(<SortItem state={1} change={() => null} param={''}/>);
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Test click', () => {
		const clickHandler = jest.fn(),
			  param = 'name',
			  wrapper = shallow(<SortItem state={1} change={clickHandler} param={param}/>);

		//click
		wrapper.simulate('click');

		//tests
		expect(clickHandler).toBeCalledTimes(1);
		expect(clickHandler).toBeCalledWith(param);
	});

	it('Test state changes', () => {
		const wrapper = shallow(<SortItem state={1} change={() => null} param={''}/>);
		expect(wrapper.find('.fa-sort-amount-asc')).toBeTruthy();

		wrapper.setProps({state: -1});
		expect(wrapper.find('.fa-sort.amount-desc')).toBeTruthy();

		wrapper.setProps({state: undefined});
		expect(wrapper.find('.opacity-5')).toBeTruthy();
	});
});
