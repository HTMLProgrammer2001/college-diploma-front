import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';


export type IDepartmentsAddData = {
	name: string
};

type IDepartmentsAddFormProps = InjectedFormProps<IDepartmentsAddData>;
const DepartmentsAddForm: React.FC<IDepartmentsAddFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit}>

		{
			error &&
				<div>{error}</div>
		}

		<Translation>
			{t => (
				<Col xs={4}>
					<Field
						component={InputElement}
						type="text"
						name="name"
						className="m-0"
						label={t('departments.add.name')}
						validate={[required]}
					/>
				</Col>
			)}
		</Translation>
	</form>
);

export default reduxForm<IDepartmentsAddData>({
	form: 'departmentsAddForm'
})(DepartmentsAddForm);
