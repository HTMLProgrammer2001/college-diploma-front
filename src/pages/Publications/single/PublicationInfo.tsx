import React from 'react';
import {Trans, Translation} from 'react-i18next';

import {IPublication} from '../../../interfaces/models/IPublication';


type IPublicationInfoProps = {
	publication: IPublication
}

const PublicationInfo: React.FC<IPublicationInfoProps> = ({publication}) => (
	<Translation>
		{t => (
			<div>
				<Trans i18nKey="publications.single.id">
					<div>ID: {{id: publication.id}}</div>
				</Trans>

				<Trans i18nKey="publications.single.title">
					<div>Title: {{title: publication.title}}</div>
				</Trans>

				<Trans i18nKey="publications.single.date">
					<div>Date of publication: {{id: publication.date_of_publication}}</div>
				</Trans>

				<Trans i18nKey="publications.single.authors">
					<div>Authors: {{authors: publication.authors}}</div>
				</Trans>

				<Trans i18nKey="publications.single.publisher">
					<div>
						Publisher: {{
							publisher: publication.publisher || t('common.notSetted')
						}}
					</div>
				</Trans>

				<Trans i18nKey="publications.single.url">
					<div>URL: <a href={publication.url}>{{url: publication.url}}</a></div>
				</Trans>

				<Trans i18nKey="publications.single.description">
					<div>
						Description: {{
							description: publication.description || t('common.notSetted')
						}}
					</div>
				</Trans>
			</div>
		)}
	</Translation>
);

export default PublicationInfo;
