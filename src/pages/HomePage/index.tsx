import React from 'react';
import {withTranslation, WithTranslationProps} from 'react-i18next';
import {Card} from 'react-bootstrap';


const HomePage: React.FC<WithTranslationProps> = ({t}: any) => (
	<div>
		<Card>
			<Card.Body>
				<div>{t('home.hello')}</div>
			</Card.Body>
		</Card>
	</div>
);

export default withTranslation()(HomePage);
