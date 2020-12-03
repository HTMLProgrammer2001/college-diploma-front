import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import DataListElement from '../../../common/formElements/DataListElement';
import SelectElement from '../../../common/formElements/SelectElement';

import required from '../../../utils/validators/required';
import year from '../../../utils/validators/year';
import positiveNumber from '../../../utils/validators/positiveNumber';


export type IEducationsAddData = {
	institution: string,
	graduateYear: string,
	qualification: number,
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
					<div className="w-100 pr-md-3">
						<Field
							component={DataListElement}
							name="user"
							placeholder={t('educations.add.user')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="text"
							name="institution"
							label={t('educations.add.institution')}
							validate={[required]}
						/>

						<Field
							component={SelectElement}
							name="qualification"
							label={t("educations.all.qualification")}
							onlyInvalid
							validate={[required]}
							defaultValue={0}
						>
							<option value={0}>{t('common.qualList.0')}</option>
							<option value={1}>{t('common.qualList.1')}</option>
							<option value={2}>{t('common.qualList.2')}</option>
						</Field>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 pl-md-3">
						<Field
							component={InputElement}
							name="graduateYear"
							label={t('educations.add.graduateYear')}
							validate={[required, positiveNumber, year]}
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
