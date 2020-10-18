import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';


type IPublicationsFilterData = {
	title: string,
	from: string,
	to: string
};

type IPublicationsFilterProps = InjectedFormProps<IPublicationsFilterData>;
const PublicationsFilterForm: React.FC<IPublicationsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Row>
			<Field
				component={InputElement}
				type="text"
				name="title"
				label="Название публикации"
				className="w-100"
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

export default reduxForm<IPublicationsFilterData>({
	form: 'profilePublicationsFilter'
})(PublicationsFilterForm)