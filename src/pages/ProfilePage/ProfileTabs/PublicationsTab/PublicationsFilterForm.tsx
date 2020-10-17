import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';

import InputElement from '../../../../common/formElements/InputElement';
import {Row} from 'react-bootstrap';


type IPublicationsFilterData = {
	title: string,
	from: string,
	to: string
};

type IPublicationsFilterProps = InjectedFormProps<IPublicationsFilterData>;
const PublicationsFilterForm: React.FC<IPublicationsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100">
		<Row>
			<Field
				component={InputElement}
				type="text"
				name="title"
				label="Название публикации"
				className="w-100"
			/>
		</Row>

		<Row md={8}>
			<Field
				component={InputElement}
				type="text"
				name="title"
				label="Название публикации"
			/>

			<Field
				component={InputElement}
				type="text"
				name="title"
				label="Название публикации"
			/>
		</Row>
	</form>
);

export default reduxForm<IPublicationsFilterData>({
	form: 'profilePublicationsFilter'
})(PublicationsFilterForm);
