import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';


type IRebukesFilterData = {
	from: string,
	to: string,
	title: string
};

type IRebukesFilterProps = InjectedFormProps<IRebukesFilterData>;
const RebukesFilterForm: React.FC<IRebukesFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Row md={12}>
			<Field
				component={InputElement}
				name="title"
				type="text"
				label="Название выговора"
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

		<Button variant="primary" className="w-25">Поиск</Button>
	</form>
);

export default reduxForm<IRebukesFilterData>({
	form: 'profileRebukesFilter'
})(RebukesFilterForm);
