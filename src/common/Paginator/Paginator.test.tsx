import React from 'react';
import {shallow} from 'enzyme';

import Paginator from './';
import {Pagination} from 'react-bootstrap';


describe('Test paginator component', () => {
	it('Test render', () => {
		const wrapper = shallow(<Paginator totalItems={10} curPage={1} pageSize={5} setCur={null}/>);
		expect(wrapper.html()).toMatchSnapshot();
	});

	// it('Test', () => {
	// 	const curHandler = jest.fn(),
	// 		  wrapper = shallow(<Paginator totalItems={8} curPage={6} pageSize={5} setCur={curHandler}/>);
	//
	// 	//expect(wrapper.find(Pagination.Item).length).toBe(3);
	// 	expect(wrapper.find('.active').text()).toBe(6);
	// });
	//
	// it('Test next', () => {
	// 	expect(true).toBeTruthy();
	// });
	//
	// it('Test prev', () => {
	// 	expect(true).toBeTruthy();
	// });
});
