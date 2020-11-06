import React from 'react';
import {Trans} from 'react-i18next';

import {IRebuke} from '../../../interfaces/models/IRebuke';


type IRebukeInfoProps = {
	rebuke: IRebuke
}

const RebukeInfo: React.FC<IRebukeInfoProps> = ({rebuke}) => (
	<div>
		<Trans i18nKey="rebukes.single.id">
			<div>ID: {{id: rebuke.id}}</div>
		</Trans>

		<Trans i18nKey="rebukes.single.user">
			<div>User: {{authors: rebuke.user.fullName}}</div>
		</Trans>

		<Trans i18nKey="rebukes.single.title">
			<div>Title: {{title: rebuke.title}}</div>
		</Trans>

		<Trans i18nKey="rebukes.single.date">
			<div>Date of rebuke: {{id: rebuke.datePresentation}}</div>
		</Trans>
	</div>
);

export default RebukeInfo;
