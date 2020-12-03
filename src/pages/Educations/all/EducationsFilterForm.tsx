import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {Button, Row} from 'react-bootstrap';
import {useLocation} from 'react-router';
import qs from 'querystring';

import InputElement from '../../../common/formElements/InputElement';
import DataListElement from '../../../common/formElements/DataListElement';
import positiveNumber from '../../../utils/validators/positiveNumber';
import SelectElement from '../../../common/formElements/SelectElement';


export type IEducationsFilterData = {
	filterUser: number,
	filterQualification: number,
	filterInstitution: string,
	filterSpecialty: string,
	filterGraduateFrom: number,
	filterGraduateTo: number
};

type IEducationsFilterFormProps = InjectedFormProps<IEducationsFilterData>;
const EducationsFilterForm: React.FC<IEducationsFilterFormProps> = ({handleSubmit, initialize}) => {
	const location = useLocation();

	useEffect(() => {
		//parse and initialize form
		const q = qs.parse(location.search.slice(1));
		initialize(q);
	}, []);

	return (
		<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
			<Translation>
				{t => (
					<Row className="justify-content-center">
						<Field
							component={DataListElement}
							name="filterUser"
							id="filterUser"
							className="w-100"
							placeholder={t('educations.all.filterUser')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
						/>

						<Field
							component={SelectElement}
							name="filterQualification"
							className="w-100"
							label={t("educations.all.qualification")}
							onlyInvalid
						>
							<option selected value={-1}>{t('common.all')}</option>
							<option value={0}>{t('common.qualList.0')}</option>
							<option value={1}>{t('common.qualList.1')}</option>
							<option value={2}>{t('common.qualList.2')}</option>
						</Field>
					</Row>
				)}
			</Translation>

			<Translation>
				{t => (
					<Row className="justify-content-center">
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
					<Row className="justify-content-center">
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
};

export default reduxForm<IEducationsFilterData>({
	form: 'educationsFilterForm'
})(EducationsFilterForm);
