import React from 'react';
import {Trans} from 'react-i18next';

import LanguageSelect from '../LanguageSelect';
import DownloadButton from '../DownloadButton';


const Footer: React.FC<{}> = () => (
	<footer className="p-3 border-top bg-white">
		<div className="d-flex justify-content-between">
			<div>
				<DownloadButton/>
			</div>

			<div className="mr-5 col-sm-6 col-md-3">
				<LanguageSelect/>
			</div>
		</div>

		<b>
			<Trans i18nKey="layout.footer.copyright">
				Copyright © {{date: new Date().getFullYear()}} by
				<a href="https://htmlprogrammer.ru">Yuri Prisyazhnyy.</a>
			</Trans>
		</b>

		&nbsp;

		<span>
			<Trans i18nKey="layout.footer.rights"/>
		</span>
	</footer>
);

export default Footer;
