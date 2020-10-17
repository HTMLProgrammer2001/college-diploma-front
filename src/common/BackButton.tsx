import React from 'react';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


const BackButton: React.FC<{}> = () => {
	const history = useHistory();

	return (
		<Button variant="light" onClick={() => history.goBack()}>Назад</Button>
	);
};

export default BackButton;
