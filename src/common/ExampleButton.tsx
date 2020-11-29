import React from 'react';
import {useTranslation} from 'react-i18next';

import {IExample} from '../interfaces/IExample';
import FileDownloadWrapper from './FileDownloadWrapper';


type IExampleButtonProps = {
	load: () => IExample,
	fileName: string
};

const ExampleButton: React.FC<IExampleButtonProps> = ({load, fileName}) => {
	const {t} = useTranslation();

	return (
		<FileDownloadWrapper load={load} fileName={fileName}>
			{
				({isLoading, load, cancel}) => (
					<a className="mt-3" onClick={isLoading ? cancel : load}>
						{isLoading ? t('common.stop') : t('common.downloadExample')}
					</a>
				)
			}
		</FileDownloadWrapper>
	);
};

export default ExampleButton;
