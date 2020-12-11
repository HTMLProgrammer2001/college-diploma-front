import React from 'react';
import {shallow} from 'enzyme';

import {_UserCan} from './UserCan';
import {Roles} from '../utils/helpers/converters/RoleCodeToName';
import {IUser} from '../interfaces/models/IUser';


describe('Test user can component unconnected', () => {
	const user: IUser = {id: 1, department: null, commission: null, fullName: '', email: null, role: Roles.USER, experience: 0};

	it('Test render', () => {
		const wrapper = shallow(<_UserCan role={Roles.USER} user={user}>null</_UserCan>);
		expect(wrapper.html()).toMatchSnapshot();
	});

	it('Test unauthorized', () => {
		const wrapper = shallow(<_UserCan role={Roles.MODERATOR} user={user}>Content</_UserCan>);
		expect(wrapper.html()).toBeFalsy();
	});

	it('Test authorized', () => {
		const content = 'Content',
			wrapper = shallow(<_UserCan role={Roles.USER} user={user}>{content}</_UserCan>);

		expect(wrapper.text()).toBe(content);
	});
});
