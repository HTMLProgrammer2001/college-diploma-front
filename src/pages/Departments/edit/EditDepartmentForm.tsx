import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';
import {connect, ConnectedProps} from 'react-redux';

import InputElement from '../../../common/formElements/InputElement';
import {RootState} from '../../../redux';
import {selectEditDepartment} from '../../../redux/departments/edit/selectors';


const mapStateToProps = (state: RootState) => ({
	department: selectEditDepartment(state)
});

const connected = connect(mapStateToProps);

export type IDepartmentsEditData = {
	name: string
};

type IOwnProps = ConnectedProps<typeof connected>;

type IDepartmentsEditFormProps = InjectedFormProps<IDepartmentsEditData, IOwnProps> & IOwnProps;
const DepartmentsEditForm: React.FC<IDepartmentsEditFormProps> = ({handleSubmit, department}) => (
	<form onSubmit={handleSubmit}>
		<Col xs={4}>
			<Field
				component={InputElement}
				type="text"
				name="name"
				className="m-0"
				label="Название отделения"
				defaultValue={department.name}
			/>
		</Col>
	</form>
);

export default connected(
	reduxForm<IDepartmentsEditData, IOwnProps>({
		form: 'departmentsEditForm'
	})(DepartmentsEditForm)
);
