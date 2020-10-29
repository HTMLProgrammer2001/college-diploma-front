import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';
import {Translation} from 'react-i18next';

import InputElement from '../../../../common/formElements/InputElement';
import SelectElement from '../../../../common/formElements/SelectElement';

import positiveNumber from '../../../../utils/validators/positiveNumber';


export type IProfileEducationsFilterData = {
	filterQualification: string,
	filterInstitution: string,
	filterGraduateYear: number
};

type IEducationsFilterProps = InjectedFormProps<IProfileEducationsFilterData>;
const EducationsFilterForm: React.FC<IEducationsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Translation>
			{t => (
				<Row md={12}>
					<Field
						component={SelectElement}
						name="filterQualification"
						label={t("profile.tabs.educations.qualification")}
						onlyInvalid
					>
						<option selected value={-1}>{t('profile.tabs.educations.qualList.0')}</option>
						<option value={0}>{t('profile.tabs.educations.qualList.1')}</option>
						<option value={1}>{t('profile.tabs.educations.qualList.2')}</option>
						<option value={2}>{t('profile.tabs.educations.qualList.3')}</option>
					</Field>
				</Row>
				)}
		</Translation>

		<Translation>
			{t => (
				<Row md={12} className="justify-content-sm-center">
					<Field
						component={InputElement}
						type="text"
						name="filterInstitution"
						label={t('profile.tabs.educations.institutionName')}
						className="mr-1"
					/>

					<Field
						component={InputElement}
						type="number"
						name="filterGraduateYear"
						label={t('profile.tabs.educations.graduateYear')}
						defaultValue={new Date().getFullYear()}
						className="ml-1"
						validate={[positiveNumber]}
					/>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<Button variant="primary" className="px-5" type="submit">
					{t("common.search")}
				</Button>
			)}
		</Translation>
	</form>
);

export default reduxForm<IProfileEducationsFilterData>({
	form: 'profileEducationsFilter'
})(EducationsFilterForm);
