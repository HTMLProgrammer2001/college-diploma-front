import React, {useEffect} from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';
import {Translation} from 'react-i18next';
import {useLocation} from 'react-router';
import qs from 'querystring';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';

import dateMoreThan from '../../../../utils/validators/dateMoreThan';
import date from '../../../../utils/validators/date';


const moreDateValidator = dateMoreThan('filterFrom');

export type IProfilePublicationsFilterData = {
	filterTitle: string,
	filterFrom: string,
	filterTo: string
};

type IPublicationsFilterProps = InjectedFormProps<IProfilePublicationsFilterData>;
const PublicationsFilterForm: React.FC<IPublicationsFilterProps> = ({handleSubmit, initialize}) => {
	const location = useLocation();

	useEffect(() => {
		//we initialize not this tab
		if(location.hash != '#publications' && location.hash)
			return;

		//parse QP and set as default values
		const q = qs.parse(location.search.slice(1));
		initialize(q);
	}, []);

	return (
		<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
			<Translation>
				{t => (
					<Row>
						<Field
							component={InputElement}
							type="text"
							name="filterTitle"
							label={t('profile.tabs.publications.publicationName')}
							className="w-100"
							onlyInValid
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
							validate={[date]}
						/>

						<Field
							component={DateElement}
							name="filterTo"
							label={t('common.to')}
							validate={[date, moreDateValidator]}
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

export default reduxForm<IProfilePublicationsFilterData>({
	form: 'profilePublicationsFilter'
})(PublicationsFilterForm)
