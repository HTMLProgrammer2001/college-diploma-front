import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Form, Card, Button, Spinner, Col, Alert} from 'react-bootstrap';

import InputElement from '../../common/form/InputElement';
import styles from './styles.module.scss';


export type ILoginFormData = {
	email: string,
	password: string
};

type ILoginFormProps = InjectedFormProps<ILoginFormData>;
const LoginForm: React.FC<ILoginFormProps> = ({handleSubmit, submitting, error}) => (
	<Form onSubmit={handleSubmit}>
		<Card>
			<Card.Header>
				<h4 className="text-center">Авторизация</h4>
			</Card.Header>

			<Card.Body className="d-flex justify-content-center">
				<Col xs={12} md={8}>
					{
						error &&
							<Alert variant="error">{error}</Alert>
					}

					<Field
						component={InputElement}
						type="text"
						name="email"
						label="Email*"
					/>

					<Field
						component={InputElement}
						type="password"
						name="password"
						label="Password*"
					/>

					<button hidden/>
				</Col>
			</Card.Body>

			<Card.Footer className="d-flex justify-content-end">
				<Button variant="success" type="submit" className="center">
					{
						submitting &&
							<Spinner animation="border" className={styles.spinner}/>
					}

					<span>Войти</span>
				</Button>
			</Card.Footer>
		</Card>
	</Form>
);

export default reduxForm<ILoginFormData>({
	form: 'login'
})(LoginForm);
