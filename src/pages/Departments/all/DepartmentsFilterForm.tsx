import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import {Button} from 'react-bootstrap';


export type IDepartmentsFilterData = {
	filterName: string
};

type IDepartmentsFilterFormProps = InjectedFormProps<IDepartmentsFilterData>;
const DepartmentsFilterForm: React.FC<IDepartmentsFilterFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="d-flex">
		<Translation>
			{t => (
				<Field
					component={InputElement}
					type="text"
					name="filterName"
					className="m-0"
					placeholder={t('departments.all.filterName')}
				/>
			)}
		</Translation>

		<Translation>
			{t => (
				<div>
					<Button variant="info" className="ml-1" type="submit">
						{t('common.search')}
					</Button>
				</div>
			)}
		</Translation>
	</form>
);

export default reduxForm<IDepartmentsFilterData>({
	form: 'departmentsFilterForm'
})(DepartmentsFilterForm);
