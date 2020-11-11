import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import FileElement from '../../../common/formElements/FileElement';
import required from '../../../utils/validators/required';


export type IQualificationsImportData = {
	importFile: File
};

type IQualificationsImportFormProps = InjectedFormProps<IQualificationsImportData>;
const QualificationsImportForm: React.FC<IQualificationsImportFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit} className="w-50">

		{
			error &&
			<div>{error}</div>
		}

		<Translation>
			{t => (
				<div className="center w-100">
					<Field
						name="importFile"
						label={t('common.importFile')}
						component={FileElement}
						validate={[required]}
					/>
				</div>
			)}
		</Translation>
	</form>
);

export default reduxForm<IQualificationsImportData>({
	form: 'qualificationsImportForm'
})(QualificationsImportForm);
