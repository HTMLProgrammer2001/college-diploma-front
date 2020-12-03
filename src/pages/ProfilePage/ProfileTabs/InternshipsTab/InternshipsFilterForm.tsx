import React, {useEffect} from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';
import {Translation} from 'react-i18next';
import {useLocation} from 'react-router';
import qs from 'querystring';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';
import DataListElement from '../../../../common/formElements/DataListElement';

import positiveNumber from '../../../../utils/validators/positiveNumber';
import dateMoreThan from '../../../../utils/validators/dateMoreThan';
import moreThan from '../../../../utils/validators/moreThan';
import date from '../../../../utils/validators/date';


const moreDateValidator = dateMoreThan('filterFrom'),
	moreValidator = moreThan('filterMoreHours');

export type IProfileInternshipsFilterData = {
	filterFrom: string,
	filterTo: string,
	filterMoreHours: number,
	filterLessHours: number,
	filterTheme: string,
	filterCategory: number
};

type IInternshipsFilterProps = InjectedFormProps<IProfileInternshipsFilterData>;
const InternshipsFilterForm: React.FC<IInternshipsFilterProps> = ({handleSubmit, initialize}) => {
	const location = useLocation();

	useEffect(() => {
		//we initialize not this tab
		if(location.hash != '#internships')
			return;

		//parse QP to form values
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
							name="filterCategory"
							id="filterCategory"
							placeholder={t('profile.tabs.internships.category')}
							className="mr-sm-1"
							url={`${process.env.REACT_APP_SERVER_URL}/search/categories`}
						/>

						<Field
							component={InputElement}
							name="filterTheme"
							label={t('profile.tabs.internships.theme')}
							type="text"
							className="ml-sm-1"
						/>
					</Row>
				)}
			</Translation>

			<Translation>
				{t => (
					<Row className="justify-content-center">
						<Field
							component={DateElement}
							name="filterFrom"
							label={t('common.from')}
							validate={[date]}
							className="mr-sm-1"
						/>

						<Field
							component={DateElement}
							name="filterTo"
							label={t('common.to')}
							validate={[date, moreDateValidator]}
							className="ml-sm-1"
						/>
					</Row>
				)}
			</Translation>

			<Translation>
				{t => (
					<Row className="justify-content-center">
						<Field
							component={InputElement}
							name="filterMoreHours"
							type="number"
							min={0}
							label={t('profile.tabs.internships.hoursMore')}
							validate={[positiveNumber]}
						/>

						<Field
							component={InputElement}
							name="filterLessHours"
							type="number"
							min={0}
							label={t('profile.tabs.internships.hoursLess')}
							validate={[positiveNumber, moreValidator]}
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

export default reduxForm<IProfileInternshipsFilterData>({
	form: 'profileInternshipsFilter'
})(InternshipsFilterForm);
