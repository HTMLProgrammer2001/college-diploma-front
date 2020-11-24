import React, {useContext} from 'react';
import {Trans} from 'react-i18next';
import {Button} from 'react-bootstrap';

import DownloadContext from '../utils/contexts/DownloadContext';




const DownloadButton: React.FC<{}> = () => {
	const {event} = useContext(DownloadContext);

	if(!event)
		return null;

	return (
		<Button variant="primary" onClick={() => event.prompt()}>
			<Trans i18nKey="common.install"/>
		</Button>
	);
}

export default DownloadButton;
