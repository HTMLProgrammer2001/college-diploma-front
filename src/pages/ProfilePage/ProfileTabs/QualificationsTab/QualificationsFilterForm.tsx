import React, {useEffect} from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';
import {Translation} from 'react-i18next';
import {useLocation} from 'react-router';
import qs from 'querystring';

import DateElement from '../../../../common/formElements/DateElement';
import SelectElement from '../../../../common/formElements/SelectElement';

import dateMoreThan from '../../../../utils/validators/dateMoreThan';
import date from '../../../../utils/validators/date';


const dateMoreValidator = dateMoreThan('filterFrom', false);

export type IProfileQualificationsFilterData = {
	filterCategory: number,
	filterFrom: string,
	filterTo: string
};

type IQualificationsFilterProps = InjectedFormProps<IProfileQualificationsFilterData>;
const QualificationsFilterForm: React.FC<IQualificationsFilterProps> = ({handleSubmit, initialize}) => {
	const location = useLocation();

	useEffect(() => {
		//we initialize not this tab
		if(location.hash != '#qualifications')
			return;

		//parse QP and set as default values
		const q = qs.parse(location.search.slice(1));
		initialize(q);
	}, []);

	return (
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
					<Row md={12} className="justify-content-center">
						<Field
							component={DateElement}
							name="filterFrom"
							label={t('common.from')}
							validate={[date]}
						/>

						<Field
							component={DateElement}
							name="filterTo"
							label={t('common.to')}
							validate={[date, dateMoreValidator]}
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
};

export default reduxForm<IProfileQualificationsFilterData>({
	form: 'profileQualificationsFilter'
})(QualificationsFilterForm);
