import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';
import SelectElement from '../../../common/formElements/SelectElement';

import required from '../../../utils/validators/required';
import positiveNumber from '../../../utils/validators/positiveNumber';
import date from '../../../utils/validators/date';


export type IQualificationsAddData = {
	user: number,
	name: number,
	date: string,
	description?: string
};

type IQualificationsAddFormProps = InjectedFormProps<IQualificationsAddData>;
const QualificationsAddForm: React.FC<IQualificationsAddFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit}>

		{
			error &&
			<div>{error}</div>
		}

		<div className="d-md-flex w-100">
			<Translation>
				{t => (
					<div className="w-100 pr-3">
						<Field
							component={DataListElement}
							name="user"
							placeholder={t('qualifications.add.user')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
							validate={[required]}
						/>

						<Field
							component={SelectElement}
							name="name"
							placeholder={t('qualifications.add.name')}
							validate={[required, positiveNumber]}
						>
							<option value={-1} selected>--{t('common.notSetted')}--</option>
							<option value={0}>{t('common.categories.0')}</option>
							<option value={1}>{t('common.categories.1')}</option>
							<option value={2}>{t('common.categories.2')}</option>
							<option value={3}>{t('common.categories.3')}</option>
						</Field>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 pl-3">
						<Field
							component={DateElement}
							name="date"
							label={t('qualifications.add.date')}
							validate={[required, date]}
						/>

						<Field
							component="textarea"
							name="description"
							label={t('qualifications.add.description')}
							className="form-control"
						/>
					</div>
				)}
			</Translation>
		</div>
	</form>
);

export default reduxForm<IQualificationsAddData>({
	form: 'qualificationsAddForm'
})(QualificationsAddForm);
