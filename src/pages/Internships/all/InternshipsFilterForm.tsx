import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../common/formElements/InputElement';
import DataListElement from '../../../common/formElements/DataListElement';
import DateElement from '../../../common/formElements/DateElement';


export type IInternshipsFilterData = {
	filterUser: number,
	filterCategory: number,
	filterFrom: string,
	filterTo: string,
	filterTheme: string,
	filterHoursMore: number,
	filterHoursLess: number
};

type IInternshipsFilterFormProps = InjectedFormProps<IInternshipsFilterData>;
const InternshipsFilterForm: React.FC<IInternshipsFilterFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Translation>
			{t => (
				<Row>
					<Field
						component={DataListElement}
						name="filterUser"
						id="filterUser"
						className="w-100"
						placeholder={t('internships.all.filterUser')}
						url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
					/>

					<Field
						component={DataListElement}
						name="filterCategory"
						id="filterCategory"
						className="w-100"
						placeholder={t('internships.all.filterCategory')}
						url={`${process.env.REACT_APP_SERVER_URL}/search/internCategories`}
					/>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<Row>
					<Field
						component={InputElement}
						name="filterTheme"
						className="w-100"
						label={t('internships.all.filterTheme')}
					/>
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
						label={t('internships.all.filterFrom')}
					/>

					<Field
						component={DateElement}
						name="filterTo"
						className="w-100"
						label={t('internships.all.filterTo')}
					/>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<Row>
					<Field
						component={InputElement}
						name="filterHoursMore"
						type="number"
						className="w-100"
						label={t('internships.all.filterHoursMore')}
					/>

					<Field
						component={InputElement}
						name="filterHoursLess"
						type="number"
						className="w-100"
						label={t('internships.all.filterHoursLess')}
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

export default reduxForm<IInternshipsFilterData>({
	form: 'internshipsFilterForm'
})(InternshipsFilterForm);
