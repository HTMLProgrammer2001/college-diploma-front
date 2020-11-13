import React from 'react';
import {Trans} from 'react-i18next';
import {Button} from 'react-bootstrap';

import LanguageSelect from '../LanguageSelect';


const Footer: React.FC<{}> = () => (
	<footer className="p-3 border-top bg-white">
		<div className="d-flex justify-content-between my-3">
			<div>
				<Button variant="primary">
					<Trans i18nKey="common.install"/>
				</Button>
			</div>

			<div className="mr-5 w-25">
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
