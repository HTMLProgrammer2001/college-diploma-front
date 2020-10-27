import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';

import InputElement from '../../../common/formElements/InputElement';


export type IDepartmentsFilterData = {
	name: string
};

type IDepartmentsFilterFormProps = InjectedFormProps<IDepartmentsFilterData>;
const DepartmentsFilterForm: React.FC<IDepartmentsFilterFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit}>
		<Col xs={4}>
			<Field
				component={InputElement}
				type="text"
				name="name"
				className="m-0"
				label="Название отделения"
			/>
		</Col>
	</form>
);

export default reduxForm<IDepartmentsFilterData>({
	form: 'departmentsFilterForm'
})(DepartmentsFilterForm);
