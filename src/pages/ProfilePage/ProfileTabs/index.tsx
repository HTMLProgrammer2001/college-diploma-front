import React from 'react';
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
import {useTranslation} from 'react-i18next';


const ProfileTabs: React.FC<{}> = () => {
	const loc = useLocation(),
		history = useHistory(),
		selectHandler = (el: string) => {
			//change path hash
			history.replace(`#${el}`);
		},
		{t} = useTranslation();

	return (
		<Tabs
			defaultActiveKey={loc.hash.slice(1) || "publications"}
			className={styles.tabs}
			onSelect={selectHandler}
		>
			<Tab eventKey="publications" title={t("profile.tabs.publications.title")}>
				<PublicationsTab/>
			</Tab>

			<Tab eventKey="internships" title={t("profile.tabs.internships.title")}>
				<InternshipsTab/>
			</Tab>

			<Tab eventKey="qualifications" title={t("profile.tabs.qualifications.title")}>
				<QualificationsTab/>
			</Tab>

			<Tab eventKey="honors" title={t("profile.tabs.honors.title")}>
				<HonorsTab/>
			</Tab>

			<Tab eventKey="rebukes" title={t("profile.tabs.rebukes.title")}>
				<RebukesTab/>
			</Tab>

			<Tab eventKey="educations" title={t("profile.tabs.educations.title")}>
				<EducationsTab/>
			</Tab>
		</Tabs>
	);
};

export default ProfileTabs;
