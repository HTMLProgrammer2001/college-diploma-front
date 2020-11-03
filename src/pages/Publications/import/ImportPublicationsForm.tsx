import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import FileElement from '../../../common/formElements/FileElement';


export type IPublicationsImportData = {
	importFile: File
};

type IPublicationsImportFormProps = InjectedFormProps<IPublicationsImportData>;
const PublicationsImportForm: React.FC<IPublicationsImportFormProps> = ({handleSubmit, error}) => (
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
						label={t('publications.import.file')}
						component={FileElement}
					/>
				</div>
			)}
		</Translation>
	</form>
);

export default reduxForm<IPublicationsImportData>({
	form: 'ranksAddForm'
})(PublicationsImportForm);
