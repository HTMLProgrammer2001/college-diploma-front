import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {useSelector} from 'react-redux';

import {IQualification} from '../../../interfaces/models/IQualification';
import {RootState} from '../../../redux';
import InputElement from '../../../common/formElements/InputElement';
import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';

import required from '../../../utils/validators/required';
import positiveNumber from '../../../utils/validators/positiveNumber';
import {selectEditQualification} from '../../../redux/qualifications/edit/selectors';
import SelectElement from '../../../common/formElements/SelectElement';


export type IQualificationsEditData = {
	user: number,
	name: string,
	date: string,
	description?: string
};

type IQualificationsEditFormProps = InjectedFormProps<IQualificationsEditData>;
const QualificationsEditForm: React.FC<IQualificationsEditFormProps> = ({handleSubmit, error, initialize}) => {
	const qualification = useSelector<RootState, IQualification>(selectEditQualification);

	useEffect(() => {
		initialize({...qualification, date: null} as any);
	}, [qualification]);

	return (
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
								validate={[required]}
							>
								<option value={0}>{t('qualifications.categories.0')}</option>
								<option value={1}>{t('qualifications.categories.1')}</option>
								<option value={2}>{t('qualifications.categories.2')}</option>
								<option value={3}>{t('qualifications.categories.3')}</option>
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
								validate={[required]}
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
};

export default reduxForm<IQualificationsEditData>({
	form: 'qualificationsEditForm'
})(QualificationsEditForm);
