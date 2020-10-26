import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';

import DateElement from '../../../../common/formElements/DateElement';
import SelectElement from '../../../../common/formElements/SelectElement';


export type IProfileQualificationsFilterData = {
	filterCategory: number,
	filterFrom: string,
	filterTo: string
};

type IQualificationsFilterProps = InjectedFormProps<IProfileQualificationsFilterData>;
const QualificationsFilterForm: React.FC<IQualificationsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Row md={12}>
			<Field
				component={SelectElement}
				name="filterCategory"
				label="Категория"
			>
				<option value={1}>Teach cat 1</option>
				<option value={2}>Teach cat 2</option>
			</Field>
		</Row>

		<Row md={12}>
			<Field
				component={DateElement}
				name="filterFrom"
				label="С"
			/>

			<Field
				component={DateElement}
				name="filterTo"
				label="По"
			/>
		</Row>

		<Button variant="primary" className="w-25" type="submit">Поиск</Button>
	</form>
);

export default reduxForm<IProfileQualificationsFilterData>({
	form: 'profileQualificationsFilter'
})(QualificationsFilterForm);
