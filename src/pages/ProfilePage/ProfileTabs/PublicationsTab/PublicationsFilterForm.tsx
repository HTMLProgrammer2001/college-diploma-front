import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';
import {Translation} from 'react-i18next';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';


export type IProfilePublicationsFilterData = {
	filterTitle: string,
	filterFrom: string,
	filterTo: string
};

type IPublicationsFilterProps = InjectedFormProps<IProfilePublicationsFilterData>;
const PublicationsFilterForm: React.FC<IPublicationsFilterProps> = ({handleSubmit}) => (
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

export default reduxForm<IProfilePublicationsFilterData>({
	form: 'profilePublicationsFilter'
})(PublicationsFilterForm)
