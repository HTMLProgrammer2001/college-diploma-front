import React from 'react';
import {Trans} from 'react-i18next';

import {IQualification} from '../../../interfaces/models/IQualification';
import categoriesCodeToName from '../../../utils/helpers/categoriesCodeToName';


type IQualificationInfoProps = {
	qualification: IQualification
}

const QualificationInfo: React.FC<IQualificationInfoProps> = ({qualification}) => (
	<div>
		<Trans i18nKey="qualifications.single.id">
			<div>ID: {{id: qualification.id}}</div>
		</Trans>

		<Trans i18nKey="qualifications.single.info.user">
			<div>User: {{user: qualification.user.fullName}}</div>
		</Trans>

		<Trans i18nKey="qualifications.single.info.name">
			<div>Name: {{name: categoriesCodeToName(qualification.name)}}</div>
		</Trans>

		<Trans i18nKey="qualifications.single.info.date">
			<div>Date: {{date: qualification.date}}</div>
		</Trans>

		<Trans i18nKey="qualifications.single.info.description">
			<div>Description: {{description: qualification.description}}</div>
		</Trans>
	</div>
);

export default QualificationInfo;
