import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {startSubmit} from 'redux-form';

import LoginForm, {ILoginFormData} from './LoginForm';


const LoginPage: React.FC<{}> = () => {
	const dispatch = useDispatch();
	const handler = () => {
		dispatch(startSubmit('login'));
	};

	return (
		<Container>
			<Row className="w-100 justify-content-center mt-3">
				<Col md={8}>
					<LoginForm onSubmit={handler}/>
				</Col>
			</Row>
		</Container>
	);
};

export default LoginPage;
