import React from 'react';
import {Trans} from 'react-i18next';

import {IHonor} from '../../../interfaces/models/IHonor';


type IHonorInfoProps = {
	honor: IHonor
}

const HonorInfo: React.FC<IHonorInfoProps> = ({honor}) => (
	<div>
		<Trans i18nKey="honors.single.id">
			<div>ID: {{id: honor.id}}</div>
		</Trans>

		<Trans i18nKey="honors.single.user">
			<div>User: {{authors: honor.user.fullName}}</div>
		</Trans>

		<Trans i18nKey="honors.single.title">
			<div>Title: {{title: honor.title}}</div>
		</Trans>

		<Trans i18nKey="honors.single.date">
			<div>Date of honor: {{id: honor.datePresentation}}</div>
		</Trans>
	</div>
);

export default HonorInfo;
