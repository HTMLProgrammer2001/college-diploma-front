import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';


export type ICommissionsAddData = {
	name: string
};

type ICommissionsAddFormProps = InjectedFormProps<ICommissionsAddData>;
const CommissionsAddForm: React.FC<ICommissionsAddFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit}>

		{
			error &&
				<div>{error}</div>
		}

		<Col xs={4}>
			<Field
				component={InputElement}
				type="text"
				name="name"
				className="m-0"
				label="Название цикловой комиссии"
				validate={[required]}
			/>
		</Col>
	</form>
);

export default reduxForm<ICommissionsAddData>({
	form: 'commissionsAddForm'
})(CommissionsAddForm);
