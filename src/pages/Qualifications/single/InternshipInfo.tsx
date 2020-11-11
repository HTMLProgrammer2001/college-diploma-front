import React from 'react';
import {Trans} from 'react-i18next';

import {IInternship} from '../../../interfaces/models/IInternship';


type IInternshipInfoProps = {
	internship: IInternship
}

const InternshipInfo: React.FC<IInternshipInfoProps> = ({internship}) => (
	<div>
		<Trans i18nKey="internships.single.id">
			<div>ID: {{id: internship.id}}</div>
		</Trans>

		<Trans i18nKey="internships.single.info.user">
			<div>User: {{user: internship.user.fullName}}</div>
		</Trans>

		<Trans i18nKey="internships.single.info.title">
			<div>Title: {{title: internship.title}}</div>
		</Trans>

		<Trans i18nKey="internships.single.info.category">
			<div>Category: {{category: internship.category.name}}</div>
		</Trans>

		<Trans i18nKey="internships.single.info.place">
			<div>Place: {{place: internship.place}}</div>
		</Trans>

		<Trans i18nKey="internships.single.info.from">
			<div>From: {{from: internship.from}}</div>
		</Trans>

		<Trans i18nKey="internships.single.info.to">
			<div>To: {{to: internship.to}}</div>
		</Trans>

		<Trans i18nKey="internships.single.info.hours">
			<div>Hours: {{hours: internship.hours}}</div>
		</Trans>

		<Trans i18nKey="internships.single.info.credits">
			<div>Credits: {{credits: internship.credits}}</div>
		</Trans>

		<Trans i18nKey="internships.single.info.code">
			<div>Code: {{code: internship.code}}</div>
		</Trans>
	</div>
);

export default InternshipInfo;
