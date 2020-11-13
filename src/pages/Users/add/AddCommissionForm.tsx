import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';


export type ICommissionsAddData = {
	name: string
};

type ICommissionsAddFormProps = InjectedFormProps<ICommissionsAddData>;
const CommissionsAddForm: React.FC<ICommissionsAddFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit}>

		{
			error &&
				<div>{error}</div>
		}

		<Translation>
			{t => (
				<Col xs={12} md={6} lg={4}>
					<Field
						component={InputElement}
						type="text"
						name="name"
						className="m-0"
						label={t('commissions.add.name')}
						validate={[required]}
					/>
				</Col>
			)}
		</Translation>
	</form>
);

export default reduxForm<ICommissionsAddData>({
	form: 'commissionsAddForm'
})(CommissionsAddForm);
