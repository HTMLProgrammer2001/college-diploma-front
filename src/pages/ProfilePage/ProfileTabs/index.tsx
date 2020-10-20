import React, {useEffect, useState} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import {useHistory, useLocation} from 'react-router-dom';

import styles from './styles.module.scss';

//tabs
import PublicationsTab from './PublicationsTab';
import InternshipsTab from './InternshipsTab';
import QualificationsTab from './QualificationsTab';
import {useRouteMatch} from 'react-router';
import HonorsTab from './HonorsTab';


const ProfileTabs: React.FC<{}> = () => {
	const loc = useLocation(),
		history = useHistory(),
		selectHandler = (el: string) => {
			//change path hash
			history.push(`#${el}`);
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
				<InternshipsTab hours={30}/>
			</Tab>

			<Tab eventKey="qualifications" title="Повышения квалификации">
				<QualificationsTab nextDate="20.03.2020"/>
			</Tab>

			<Tab eventKey="honors" title="Награды">
				<HonorsTab/>
			</Tab>

			<Tab eventKey="rebukes" title="Выговоры">
				<div>Rebukes</div>
			</Tab>

			<Tab eventKey="educations" title="Образования">
				<div>Educations</div>
			</Tab>
		</Tabs>
	);
};

export default ProfileTabs;
