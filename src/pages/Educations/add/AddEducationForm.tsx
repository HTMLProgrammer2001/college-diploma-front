import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';
import DataListElement from '../../../common/formElements/DataListElement';
import positiveNumber from '../../../utils/validators/positiveNumber';


export type IEducationsAddData = {
	institution: string,
	graduateYear: string,
	qualification: string,
	user: number,
	specialty?: string
};

type IEducationsAddFormProps = InjectedFormProps<IEducationsAddData>;
const EducationsAddForm: React.FC<IEducationsAddFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit}>

		{
			error &&
				<div>{error}</div>
		}
		
		<div className="d-md-flex w-100">
			<Translation>
				{t => (
					<div className="w-100 pr-3">
						<Field
							component={DataListElement}
							name="user"
							placeholder={t('educations.add.user')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
						/>

						<Field
							component={InputElement}
							type="text"
							name="institution"
							label={t('educations.add.institution')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="text"
							name="qualification"
							label={t('educations.add.qualification')}
							validate={[required]}
						/>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 pl-3">
						<Field
							component={InputElement}
							name="graduateYear"
							label={t('educations.add.graduateYear')}
							validate={[required, positiveNumber]}
						/>

						<Field
							component={InputElement}
							name="specialty"
							label={t('educations.add.specialty')}
						/>
					</div>
				)}
			</Translation>
		</div>
	</form>
);

export default reduxForm<IEducationsAddData>({
	form: 'educationsAddForm'
})(EducationsAddForm);
