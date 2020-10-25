import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../../common/formElements/InputElement';
import SelectElement from '../../../../common/formElements/SelectElement';

import positiveNumber from '../../../../utils/validators/positiveNumber';


export type IEducationsFilterData = {
	filterQualification: string,
	filterInstitution: string,
	filterGraduateYear: number
};

type IEducationsFilterProps = InjectedFormProps<IEducationsFilterData>;
const EducationsFilterForm: React.FC<IEducationsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Row md={12}>
			<Field
				component={SelectElement}
				name="filterQualification"
				label="Квалификация"
				onlyInvalid
			>
				<option selected value={-1}>Все</option>
				<option value={0}>Младший специалист</option>
				<option value={1}>Бакалавр</option>
				<option value={2}>Магистр</option>
			</Field>
		</Row>

		<Row md={12}>
			<Field
				component={InputElement}
				type="text"
				name="filterInstitution"
				label="Название заведения"
				className="mr-1"
			/>

			<Field
				component={InputElement}
				type="number"
				name="filterGraduateYear"
				label="Год выпуска"
				defaultValue={new Date().getFullYear()}
				className="ml-1"
				validate={[positiveNumber]}
			/>
		</Row>

		<Button variant="primary" className="w-25" type="submit">Поиск</Button>
	</form>
);

export default reduxForm<IEducationsFilterData>({
	form: 'profileEducationsFilter'
})(EducationsFilterForm);
