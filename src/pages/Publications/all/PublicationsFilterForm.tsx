import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../common/formElements/InputElement';
import DataListElement from '../../../common/formElements/DataListElement';
import DateElement from '../../../common/formElements/DateElement';


export type IPublicationsFilterData = {
	filterTitle: string,
	filterUser: number,
	filterFrom: string,
	filterTo: string
};

type IPublicationsFilterFormProps = InjectedFormProps<IPublicationsFilterData>;
const PublicationsFilterForm: React.FC<IPublicationsFilterFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Translation>
			{t => (
				<Row>
					<Field
						component={DataListElement}
						name="filterUser"
						id="filterUser"
						className="w-100"
						placeholder={t('publications.all.filterUser')}
						url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
					/>

					<Field
						component={InputElement}
						type="text"
						name="filterTitle"
						className="w-100 ml-1"
						label={t('publications.all.filterName')}
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
						label={t('publications.all.filterFrom')}
					/>

					<Field
						component={DateElement}
						name="filterTo"
						className="w-100"
						label={t('publications.all.filterTo')}
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

export default reduxForm<IPublicationsFilterData>({
	form: 'publicationsFilterForm'
})(PublicationsFilterForm);
