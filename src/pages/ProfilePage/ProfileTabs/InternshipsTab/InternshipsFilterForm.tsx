import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';
import SelectElement from '../../../../common/formElements/SelectElement';

import positiveNumber from '../../../../utils/validators/positiveNumber';


type IInternshipsFilterData = {
	from: string,
	to: string,
	moreHours: number,
	lessHours: number,
	theme: string,
	category: number
};

type IInternshipsFilterProps = InjectedFormProps<IInternshipsFilterData>;
const InternshipsFilterForm: React.FC<IInternshipsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Row md={12}>
			<Field
				component={SelectElement}
				name="category"
				label="Категория"
				type="text"
				className="mr-1"
			>
				<option value={0}>Все</option>
				<option value={1}>Cat 1</option>
				<option value={2}>Cat 2</option>
				<option value={3}>Cat 3</option>
			</Field>

			<Field
				component={InputElement}
				name="theme"
				label="Тема"
				type="text"
				className="ml-1"
			/>
		</Row>

		<Row md={12}>
			<Field
				component={DateElement}
				name="from"
				label="С"
			/>

			<Field
				component={DateElement}
				name="to"
				label="По"
			/>
		</Row>

		<Row md={12}>
			<Field
				component={InputElement}
				name="moreHours"
				type="number"
				min={0}
				label="Количество часов больше"
				className="mr-1"
				validate={[positiveNumber]}
			/>

			<Field
				component={InputElement}
				name="lessHours"
				type="number"
				min={0}
				label="Количество часов меньше"
				className="ml-1"
				validate={[positiveNumber]}
			/>
		</Row>

		<Button
			variant="primary"
			className="w-25"
			type="submit"
		>
			Поиск
		</Button>
	</form>
);

export default reduxForm<IInternshipsFilterData>({
	form: 'profileInternshipsFilter'
})(InternshipsFilterForm);
