import React, {useEffect, useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import {useHistory, useLocation} from 'react-router-dom';

import styles from './styles.module.scss';

//tabs
import PublicationsTab from './PublicationsTab';
import InternshipsTab from './InternshipsTab';
import QualificationsTab from './QualificationsTab';
import HonorsTab from './HonorsTab';
import RebukesTab from './RebukesTab';
import EducationsTab from './EducationsTab';


const ProfileTabs: React.FC<{}> = () => {
	const loc = useLocation(),
		history = useHistory(),
		selectHandler = (el: string) => {
			//change path hash
			history.replace(`#${el}`);
		};

	return (
		<Tabs
			defaultActiveKey={loc.hash.slice(1) || "publications"}
			className={styles.tabs}
			onSelect={selectHandler}
		>
			<Tab eventKey="publications" title="Публикации">
				<PublicationsTab/>
			</Tab>

			<Tab eventKey="internships" title="Стажировки">
				<InternshipsTab/>
			</Tab>

			<Tab eventKey="qualifications" title="Повышения квалификации">
				<QualificationsTab/>
			</Tab>

			<Tab eventKey="honors" title="Награды">
				<HonorsTab/>
			</Tab>

			<Tab eventKey="rebukes" title="Выговоры">
				<RebukesTab/>
			</Tab>

			<Tab eventKey="educations" title="Образования">
				<EducationsTab/>
			</Tab>
		</Tabs>
	);
};

export default ProfileTabs;
