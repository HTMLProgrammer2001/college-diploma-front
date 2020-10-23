import React, {useEffect} from 'react';
import {connect, ConnectedProps} from 'react-redux';
import {Redirect} from 'react-router';

import {RootState} from '../../redux';
import {selectMeInfo} from '../../redux/me/selectors';
import {selectAppState} from '../../redux/app/selectors';
import thunkApp from '../../redux/app/thunks';
import Loader from '../../common/Loader';


const IsAuthenticated = (isAuth: boolean = true) =>
	<T extends object>(Elem: React.ComponentType<T>) => {
		const mapStateToProps = (state: RootState) => ({
			app: selectAppState(state),
			user: selectMeInfo(state)
		});

		const connected = connect(mapStateToProps, {initialize: thunkApp});

		type AuthProps = T & ConnectedProps<typeof connected>;
		const AuthenticatedElement: React.FC<AuthProps> = (props: any) => {
			useEffect(() => {
				if(!props.app.initialized)
					props.initialize();
			}, []);

			if(props.app.isLoading || !props.app.initialized)
				return <Loader/>;

			if (!props.user && isAuth)
				return <Redirect to='/login'/>;

			if(props.user && !isAuth)
				return <Redirect to='/profile'/>;

			return <Elem {...(props as T)}/>;
		};

		return connected<any>(AuthenticatedElement);
	};

export default IsAuthenticated;
