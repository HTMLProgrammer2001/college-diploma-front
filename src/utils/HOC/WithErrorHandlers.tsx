import React from 'react';
import {useSelector} from 'react-redux';

import {selectAppError} from '../../redux/app/selectors';
import NotAuthenticatePage from '../../pages/ErrorPages/NotAuthenticatePage';
import NotFoundPage from '../../pages/ErrorPages/NotFoundPage';


const WithErrorHandlers = <T extends object = {}>(Elem: React.ComponentType<T>) => {
		const WrappedErrorElem: React.FC<T> = (props: any) => {
			//get error from store
			const error = useSelector(selectAppError);

			//no error than display elem
			if(!error)
				return <Elem {...(props as T)}/>;

			//errors by code
			switch (error.code) {
				case 403:
					return <NotAuthenticatePage/>;

				case 404:
					return <NotFoundPage/>;

				case 500:
					return <div>Server error</div>;
			}
		};

		return WrappedErrorElem;
	};

export default WithErrorHandlers;

