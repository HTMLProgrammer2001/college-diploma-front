import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';


export type IProfilePublicationsFilterData = {
	filterTitle: string,
	filterFrom: string,
	filterTo: string
};

type IPublicationsFilterProps = InjectedFormProps<IProfilePublicationsFilterData>;
const PublicationsFilterForm: React.FC<IPublicationsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Row>
			<Field
				component={InputElement}
				type="text"
				name="filterTitle"
				label="Название публикации"
				className="w-100"
				onlyInValid
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

export default reduxForm<IProfilePublicationsFilterData>({
	form: 'profilePublicationsFilter'
})(PublicationsFilterForm)
