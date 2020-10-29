import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';
import {Translation} from 'react-i18next';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';
import SelectElement from '../../../../common/formElements/SelectElement';

import positiveNumber from '../../../../utils/validators/positiveNumber';


export type IProfileInternshipsFilterData = {
	filterFrom: string,
	filterTo: string,
	filterMoreHours: number,
	filterLessHours: number,
	filterTheme: string,
	filterCategory: number
};

type IInternshipsFilterProps = InjectedFormProps<IProfileInternshipsFilterData>;
const InternshipsFilterForm: React.FC<IInternshipsFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Translation>
			{t => (
				<Row md={12}>
					<Field
						component={SelectElement}
						name="filterCategory"
						label={t('profile.tabs.internships.category')}
						type="text"
						className="mr-1"
					>
						<option value={0}>{t('common.all')}</option>
						<option value={1}>Cat 1</option>
						<option value={2}>Cat 2</option>
						<option value={3}>Cat 3</option>
					</Field>

					<Field
						component={InputElement}
						name="filterTheme"
						label={t('profile.tabs.internships.theme')}
						type="text"
						className="ml-1"
					/>
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
				<Row md={12}>
					<Field
						component={InputElement}
						name="filterMoreHours"
						type="number"
						min={0}
						label={t('profile.tabs.internships.hoursMore')}
						className="mr-1"
						validate={[positiveNumber]}
					/>

					<Field
						component={InputElement}
						name="filterLessHours"
						type="number"
						min={0}
						label={t('profile.tabs.internships.hoursLess')}
						className="ml-1"
						validate={[positiveNumber]}
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

export default reduxForm<IProfileInternshipsFilterData>({
	form: 'profileInternshipsFilter'
})(InternshipsFilterForm);
