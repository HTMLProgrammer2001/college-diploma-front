import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';

import InputElement from '../../../common/formElements/InputElement';
import {Button} from 'react-bootstrap';


export type ICommissionsFilterData = {
	filterName: string
};

type ICommissionsFilterFormProps = InjectedFormProps<ICommissionsFilterData>;
const CommissionsFilterForm: React.FC<ICommissionsFilterFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="d-flex">
		<Field
			component={InputElement}
			type="text"
			name="filterName"
			className="m-0"
			placeholder="Поиск по названию отделения"
		/>

		<Button variant="info" className="ml-1" type="submit">Поиск</Button>
	</form>
);

export default reduxForm<ICommissionsFilterData>({
	form: 'commissionsFilterForm'
})(CommissionsFilterForm);
