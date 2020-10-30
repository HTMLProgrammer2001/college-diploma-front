import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router';

import {RootState} from '../../redux';
import {selectMeInfo} from '../../redux/me/selectors';
import NotAuthenticatePage from '../../pages/ErrorPages/NotAuthenticatePage';


const IsUserRoleMore = (code: number, notAuth = false) =>
	<T extends object>(Elem: React.ComponentType<T>) => {
		const mapStateToProps = (state: RootState) => ({
			user: selectMeInfo(state)
		});

		const connected = connect(mapStateToProps);

		type AuthProps = T & ConnectedProps<typeof connected>;
		const WrapperElement: React.FC<AuthProps> = (props: any) => {
			if(!props.user)
				return <Redirect to='/login'/>;

			if(props.user.role <= code)
				return <Elem {...(props as T)}/>;

			return notAuth ? <NotAuthenticatePage/> : null;
		};

		return connected<any>(WrapperElement);
	};

export default IsUserRoleMore;
