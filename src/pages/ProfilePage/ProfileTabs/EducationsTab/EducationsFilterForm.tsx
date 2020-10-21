import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../../common/formElements/InputElement';
import SelectElement from '../../../../common/formElements/SelectElement';


type IEducationsFilterData = {
	qualification: string,
	institution: string,
	graduate_year: number
};

type IEducationsFilterProps = InjectedFormProps<IEducationsFilterData>;
const EducationsFilterForm: React.FC<IEducationsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Row md={12}>
			<Field
				component={SelectElement}
				name="title"
				label="Квалификация"
			>
				<option selected>Все</option>
				<option>Младший специалист</option>
				<option>Бакалавр</option>
				<option>Магистр</option>
			</Field>
		</Row>

		<Row md={12}>
			<Field
				component={InputElement}
				type="text"
				name="institution"
				label="Название заведения"
				className="mr-1"
			/>

			<Field
				component={InputElement}
				type="number"
				name="graduate_year"
				label="Год выпуска"
				defaultValue={new Date().getFullYear()}
				className="ml-1"
			/>
		</Row>

		<Button variant="primary" className="w-25">Поиск</Button>
	</form>
);

export default reduxForm<IEducationsFilterData>({
	form: 'profileEducationsFilter'
})(EducationsFilterForm);
