import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';
import {Translation} from 'react-i18next';

import DateElement from '../../../../common/formElements/DateElement';
import SelectElement from '../../../../common/formElements/SelectElement';


export type IProfileQualificationsFilterData = {
	filterCategory: number,
	filterFrom: string,
	filterTo: string
};

type IQualificationsFilterProps = InjectedFormProps<IProfileQualificationsFilterData>;
const QualificationsFilterForm: React.FC<IQualificationsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Translation>
			{t => (
				<Row md={12}>
					<Field
						component={SelectElement}
						name="filterCategory"
						label={t('profile.tabs.qualifications.category')}
					>
						<option value={-1}>{t('common.all')}</option>
						<option value={0}>{t('profile.tabs.qualifications.categories.0')}</option>
						<option value={1}>{t('profile.tabs.qualifications.categories.1')}</option>
						<option value={2}>{t('profile.tabs.qualifications.categories.2')}</option>
						<option value={3}>{t('profile.tabs.qualifications.categories.3')}</option>
					</Field>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<Row md={12}>
					<Field
						component={DateElement}
						name="filterFrom"
						label={t('common.from')}
					/>

					<Field
						component={DateElement}
						name="filterTo"
						label={t('common.to')}
					/>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<Button variant="primary" className="px-5" type="submit">
					{t('common.search')}
				</Button>
			)}
		</Translation>
	</form>
);

export default reduxForm<IProfileQualificationsFilterData>({
	form: 'profileQualificationsFilter'
})(QualificationsFilterForm);
