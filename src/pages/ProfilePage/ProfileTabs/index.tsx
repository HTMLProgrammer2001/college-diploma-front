import React from 'react';
import {Tabs, Tab} from 'react-bootstrap';

import styles from './styles.module.scss';

//tabs
import PublicationsTab from './PublicationsTab';
import InternshipsTab from './InternshipsTab';
import QualificationsTab from './QualificationsTab';


const ProfileTabs: React.FC<{}> = () => (
	<Tabs defaultActiveKey="publications" className={styles.tabs}>
		<Tab eventKey="publications" title="Публикации">
			<PublicationsTab/>
		</Tab>

		<Tab eventKey="internships" title="Стажировки">
			<InternshipsTab hours={30}/>
		</Tab>

		<Tab eventKey="qualifications" title="Повышения квалификации">
			<QualificationsTab/>
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
