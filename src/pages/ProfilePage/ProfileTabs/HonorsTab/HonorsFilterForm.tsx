import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';


type IHonorsFilterData = {
	from: string,
	to: string,
	title: string
};

type IHonorsFilterProps = InjectedFormProps<IHonorsFilterData>;
const HonorsFilterForm: React.FC<IHonorsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Row md={12}>
			<Field
				component={InputElement}
				name="title"
				type="text"
				label="Название награды"
			/>
		</Row>

		<Row md={12}>
			<Field
				component={DateElement}
				name="from"
				dateFormat="dd.MM.yyyy"
				label="С"
			/>

			<Field
				component={DateElement}
				name="to"
				dateFormat="dd.MM.yyyy"
				label="По"
			/>
		</Row>

		<Button variant="primary" className="w-25">Поиск</Button>
	</form>
);

export default reduxForm<IHonorsFilterData>({
	form: 'profileHonorsFilter'
})(HonorsFilterForm);
