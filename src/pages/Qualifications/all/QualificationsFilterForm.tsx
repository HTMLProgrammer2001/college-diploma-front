import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {Button, Row} from 'react-bootstrap';

import DataListElement from '../../../common/formElements/DataListElement';
import DateElement from '../../../common/formElements/DateElement';
import SelectElement from '../../../common/formElements/SelectElement';


export type IQualificationsFilterData = {
	filterUser: number,
	filterFrom: string,
	filterTo: string,
	filterName: string
};

type IQualificationsFilterFormProps = InjectedFormProps<IQualificationsFilterData>;
const QualificationsFilterForm: React.FC<IQualificationsFilterFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Translation>
			{t => (
				<Row>
					<Field
						component={DataListElement}
						name="filterUser"
						type="number"
						className="w-100"
						placeholder={t('qualifications.all.filterUser')}
						url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
					/>

					<Field
						component={SelectElement}
						name="filterName"
						label={t('qualifications.all.filterName')}
					>
						<option value={0}>{t('qualifications.categories.0')}</option>
						<option value={1}>{t('qualifications.categories.1')}</option>
						<option value={2}>{t('qualifications.categories.2')}</option>
						<option value={3}>{t('qualifications.categories.3')}</option>
					</Field>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<Row>
					<Field
						component={DateElement}
						name="filterFrom"
						className="w-100"
						label={t('qualifications.all.filterFrom')}
					/>

					<Field
						component={DateElement}
						name="filterTo"
						className="w-100"
						label={t('qualifications.all.filterTo')}
					/>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<div>
					<Button variant="info" type="submit">
						{t('common.search')}
					</Button>
				</div>
			)}
		</Translation>
	</form>
);

export default reduxForm<IQualificationsFilterData>({
	form: 'qualificationsFilterForm'
})(QualificationsFilterForm);
