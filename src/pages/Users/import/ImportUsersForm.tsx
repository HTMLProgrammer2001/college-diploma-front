import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import FileElement from '../../../common/formElements/FileElement';
import required from '../../../utils/validators/required';


export type IRebukesImportData = {
	importFile: File
};

type IRebukesImportFormProps = InjectedFormProps<IRebukesImportData>;
const RebukesImportForm: React.FC<IRebukesImportFormProps> = ({handleSubmit, error}) => (
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

export default reduxForm<IRebukesImportData>({
	form: 'usersImportForm'
})(RebukesImportForm);
