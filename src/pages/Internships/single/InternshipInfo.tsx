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

		<Trans i18nKey="internships.single.user">
			<div>User: {{authors: internship.user.fullName}}</div>
		</Trans>

		<Trans i18nKey="internships.single.title">
			<div>Title: {{title: internship.title}}</div>
		</Trans>

		<Trans i18nKey="internships.single.category">
			<div>Category: {{category: internship.category.name}}</div>
		</Trans>

		<Trans i18nKey="internships.single.place">
			<div>Place: {{place: internship.place}}</div>
		</Trans>

		<Trans i18nKey="internships.single.from">
			<div>From: {{from: internship.from}}</div>
		</Trans>

		<Trans i18nKey="internships.single.to">
			<div>To: {{to: internship.to}}</div>
		</Trans>

		<Trans i18nKey="internships.single.hours">
			<div>Hours: {{hours: internship.hours}}</div>
		</Trans>

		<Trans i18nKey="internships.single.credits">
			<div>Credits: {{credits: internship.credits}}</div>
		</Trans>

		<Trans i18nKey="internships.single.code">
			<div>Code: {{code: internship.code}}</div>
		</Trans>
	</div>
);

export default InternshipInfo;
