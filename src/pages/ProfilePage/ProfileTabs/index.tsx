import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

import styles from './styles.module.scss';
import PublicationsTab from './PublicationsTab';


const ProfileTabs: React.FC<{}> = () => (
	<Tabs defaultActiveKey="publications" className={styles.tabs}>
		<Tab eventKey="publications" title="Публикации">
			<PublicationsTab/>
		</Tab>

		<Tab eventKey="internships" title="Стажировки">
			<div>Internships</div>
		</Tab>

		<Tab eventKey="qualifications" title="Повышения квалификации">
			<div>Qualifications</div>
		</Tab>

		<Tab eventKey="honors" title="Награды">
			<div>Honors</div>
		</Tab>

		<Tab eventKey="rebukes" title="Выговоры">
			<div>Rebukes</div>
		</Tab>

		<Tab eventKey="educations" title="Образования">
			<div>Educations</div>
		</Tab>
	</Tabs>
);

export default ProfileTabs;
