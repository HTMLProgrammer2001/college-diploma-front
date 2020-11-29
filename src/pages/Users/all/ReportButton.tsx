import React from 'react';
import {connect, ConnectedProps, useSelector} from 'react-redux';
import {getFormValues} from 'redux-form';
import {Button} from 'react-bootstrap';
import {useTranslation} from 'react-i18next';

import {RootState} from '../../../redux';
import reportApi from '../../../utils/api/reportApi';
import FileDownloadWrapper from '../../../common/FileDownloadWrapper';


const ReportButton: React.FC<{}> = () => {
	const {t} = useTranslation(),
		form = getFormValues('usersFilterForm')(useSelector((state) => state));

	console.log(form);

	return (
		<FileDownloadWrapper load={() => reportApi.generateReport(form as any)} fileName="report.xlsx">
			{
				({isLoading, cancel, load}) => (
					<Button variant="primary" onClick={isLoading ? cancel : load}>
						{isLoading ? t('common.generate') : t('common.export')}
					</Button>
				)
			}
		</FileDownloadWrapper>
	)
};

export default ReportButton;
