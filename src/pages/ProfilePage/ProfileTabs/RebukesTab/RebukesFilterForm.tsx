import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';


export type IProfileRebukesFilterData = {
	filterFrom: string,
	filterTo: string,
	filterTitle: string
};

type IRebukesFilterProps = InjectedFormProps<IProfileRebukesFilterData>;
const RebukesFilterForm: React.FC<IRebukesFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Row md={12}>
			<Field
				component={InputElement}
				name="filterTitle"
				type="text"
				label="Название выговора"
			/>
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

export default reduxForm<IProfileRebukesFilterData>({
	form: 'profileRebukesFilter'
})(RebukesFilterForm);
