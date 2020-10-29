import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Card, Button, Spinner, Col, Alert} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import InputElement from '../../common/formElements/InputElement';
import styles from './styles.module.scss';
import required from '../../utils/validators/required';
import email from '../../utils/validators/email';
import lengthIn from '../../utils/validators/lengthIn';


export type ILoginFormData = {
	email: string,
	password: string
};

const passwordLength = lengthIn(8, 32);

type ILoginFormProps = InjectedFormProps<ILoginFormData>;
const LoginForm: React.FC<ILoginFormProps> = ({handleSubmit, submitting, error}) => {
	const {t} = useTranslation();

	return (
		<form onSubmit={handleSubmit}>
			<Card>
				<Card.Header>
					<h4 className="text-center">{t("login.authorization")}</h4>
				</Card.Header>

				<Card.Body className="d-flex justify-content-center">
					<Col xs={12} md={8}>
						{
							error &&
								<Alert variant="danger">{error}</Alert>
						}

						<Field
							component={InputElement}
							type="text"
							name="email"
							label="Email*"
							validate={[required, email]}
							onlyInValid={false}
						/>

						<Field
							component={InputElement}
							type="password"
							name="password"
							label={`${t("login.password")}*`}
							validate={[required, passwordLength]}
							onlyInValid={false}
						/>

						<button hidden/>
					</Col>
				</Card.Body>

				<Card.Footer className="d-flex justify-content-end">
					<Button variant="success" type="submit" className="center" disabled={submitting}>
						{
							submitting &&
								<Spinner animation="border" className={styles.spinner}/>
						}

						<span>{t("login.enter")}</span>
					</Button>
				</Card.Footer>
			</Card>
		</form>
	);
};

export default reduxForm<ILoginFormData>({
	form: 'loginForm'
})(LoginForm);
