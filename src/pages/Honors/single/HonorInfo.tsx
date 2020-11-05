import React from 'react';
import {Trans, Translation} from 'react-i18next';

import {IHonor} from '../../../interfaces/models/IHonor';


type IHonorInfoProps = {
	honor: IHonor
}

const HonorInfo: React.FC<IHonorInfoProps> = ({honor}) => (
	<Translation>
		{t => (
			<div>
				<Trans i18nKey="honors.single.id">
					<div>ID: {{id: honor.id}}</div>
				</Trans>

				<Trans i18nKey="honors.single.user">
					<div>Authors: {{authors: honor.user}}</div>
				</Trans>

				<Trans i18nKey="honors.single.title">
					<div>Title: {{title: honor.title}}</div>
				</Trans>

				<Trans i18nKey="honors.single.date">
					<div>Date of honor: {{id: honor.datePresentation}}</div>
				</Trans>

				<Trans i18nKey="honors.single.type">
					<div>Authors: {{authors: honor.type}}</div>
				</Trans>
			</div>
		)}
	</Translation>
);

export default HonorInfo;
