import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../common/formElements/InputElement';
import DataListElement from '../../../common/formElements/DataListElement';
import DateElement from '../../../common/formElements/DateElement';
import positiveNumber from '../../../utils/validators/positiveNumber';


export type IEducationsFilterData = {
	filterUser: number,
	filterQualification: string,
	filterInstitution: string,
	filterSpecialty: string,
	filterGraduateFrom: number,
	filterGraduateTo: number
};

type IEducationsFilterFormProps = InjectedFormProps<IEducationsFilterData>;
const EducationsFilterForm: React.FC<IEducationsFilterFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Translation>
			{t => (
				<Row>
					<Field
						component={DataListElement}
						name="filterUser"
						id="filterUser"
						className="w-100"
						placeholder={t('educations.all.filterUser')}
						url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
					/>

					<Field
						component={InputElement}
						type="text"
						name="filterQualification"
						className="w-100 ml-1"
						label={t('educations.all.filterQualification')}
					/>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<Row>
					<Field
						component={InputElement}
						type="text"
						name="filterInstitution"
						className="w-100 ml-1"
						label={t('educations.all.filterInstitution')}
					/>

					<Field
						component={InputElement}
						type="text"
						name="filterSpecialty"
						className="w-100 ml-1"
						label={t('educations.all.filterSpecialty')}
					/>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<Row>
					<Field
						component={InputElement}
						type="number"
						name="filterGraduateFrom"
						className="w-100"
						label={t('educations.all.filterGraduateFrom')}
						validate={[positiveNumber]}
					/>

					<Field
						component={InputElement}
						type="number"
						name="filterGraduateTo"
						className="w-100"
						label={t('educations.all.filterGraduateTo')}
						validate={[positiveNumber]}
					/>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<div>
					<Button variant="info" type="submit">
						{t('common.search')}
					</Button>
				</div>
			)}
		</Translation>
	</form>
);

export default reduxForm<IEducationsFilterData>({
	form: 'educationsFilterForm'
})(EducationsFilterForm);
