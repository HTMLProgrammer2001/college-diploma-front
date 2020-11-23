import React, {useEffect} from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';
import {Translation} from 'react-i18next';
import {useLocation} from 'react-router';
import queryString from 'querystring';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';

import dateMoreThan from '../../../../utils/validators/dateMoreThan';
import date from '../../../../utils/validators/date';


const moreValidator = dateMoreThan('filterFrom', false);

export type IProfileHonorsFilterData = {
	filterFrom: string,
	filterTo: string,
	filterTitle: string
};

type IHonorsFilterProps = InjectedFormProps<IProfileHonorsFilterData>;
const HonorsFilterForm: React.FC<IHonorsFilterProps> = ({handleSubmit, initialize}) => {
	const location = useLocation();

	useEffect(() => {
		//set current QP as default value of form
		const q = queryString.parse(location.search.slice(1));
		initialize(q);
	}, []);

	return (
		<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
			<Translation>
				{t => (
					<Row md={12}>
						<Field
							component={InputElement}
							name="filterTitle"
							type="text"
							label={t('profile.tabs.honors.honorName')}
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
							label={t("common.from")}
							validate={[date]}
						/>

						<Field
							component={DateElement}
							name="filterTo"
							label={t("common.to")}
							validate={[date, moreValidator]}
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

export default reduxForm<IProfileHonorsFilterData>({
	form: 'profileHonorsFilter'
})(HonorsFilterForm);
