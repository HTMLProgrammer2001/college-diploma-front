import React from 'react';
import {Trans, useTranslation} from 'react-i18next';

import {IEducation} from '../../../interfaces/models/IEducation';
import qualificationToName from '../../../utils/helpers/converters/qualificationToName';


type IEducationInfoProps = {
	education: IEducation
}

const EducationInfo: React.FC<IEducationInfoProps> = ({education}) => {
	const {t} = useTranslation();

	return (
		<div>
			<Trans i18nKey="educations.single.info.id">
				<div>ID: {{id: education.id}}</div>
			</Trans>

			<Trans i18nKey="educations.single.info.user">
				<div>User: {{user: education.user.fullName}}</div>
			</Trans>

			<Trans i18nKey="educations.single.info.institution">
				<div>Institution: {{institution: education.institution}}</div>
			</Trans>

			<Trans i18nKey="educations.single.info.qualification">
				<div>Qualification: {{qualification: qualificationToName(education.qualification)}}</div>
			</Trans>

			<Trans i18nKey="educations.single.info.specialty">
				<div>Specialty: {{specialty: education.specialty || t('common.notSetted')}}</div>
			</Trans>

			<Trans i18nKey="educations.single.info.graduateYear">
				<div>Graduate year: {{graduateYear: education.graduate_year}}</div>
			</Trans>
		</div>
	);
};

export default EducationInfo;
