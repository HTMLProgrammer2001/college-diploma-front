import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Col} from 'react-bootstrap';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';


export type IRanksAddData = {
	name: string
};

type IRanksAddFormProps = InjectedFormProps<IRanksAddData>;
const RanksAddForm: React.FC<IRanksAddFormProps> = ({handleSubmit, error}) => (
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
						label={t('ranks.add.name')}
						validate={[required]}
					/>
				</Col>
			)}
		</Translation>
	</form>
);

export default reduxForm<IRanksAddData>({
	form: 'ranksAddForm'
})(RanksAddForm);
