import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {Button, Row} from 'react-bootstrap';
import {useLocation} from 'react-router-dom';
import qs from 'querystring';

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
const QualificationsFilterForm: React.FC<IQualificationsFilterFormProps> = ({handleSubmit, initialize}) => {
	const location = useLocation();

	useEffect(() => {
		//parse QP and initialize form
		const q = qs.parse(location.search.slice(1));
		initialize(q);
	}, []);

	return (
		<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
			<Translation>
				{t => (
					<Row className="justify-content-center">
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
							<option value={0}>{t('common.categories.0')}</option>
							<option value={1}>{t('common.categories.1')}</option>
							<option value={2}>{t('common.categories.2')}</option>
							<option value={3}>{t('common.categories.3')}</option>
						</Field>
					</Row>
				)}
			</Translation>

			<Translation>
				{t => (
					<Row className="justify-content-center">
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
};

export default reduxForm<IQualificationsFilterData>({
	form: 'qualificationsFilterForm'
})(QualificationsFilterForm);
