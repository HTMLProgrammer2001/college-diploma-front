import React from 'react';
import {Col, Row, Container} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import LoginForm, {ILoginFormData} from './LoginForm';
import thunkLogin from '../../redux/login/thunks';
import {useHistory} from 'react-router';
import IsAuthenticated from '../../utils/HOC/IsAuthenticated';

const mapDispatchToProps = (dispatch: any) => ({
	login(vals: ILoginFormData){
		return dispatch(thunkLogin(vals));
	}
});

const connected = connect(null, mapDispatchToProps);

type ILoginPageProps = ConnectedProps<typeof connected>;
const LoginPage: React.FC<ILoginPageProps> = ({login}) => {
	const history = useHistory();
	const handler = (vals: ILoginFormData) => {
		login(vals).then((val: boolean) => {
			if(val)
				history.push('/profile');
		});
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

export default IsAuthenticated(false)(connected(LoginPage));
