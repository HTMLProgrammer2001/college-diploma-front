import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {Button, Row} from 'react-bootstrap';

import InputElement from '../../../common/formElements/InputElement';
import DataListElement from '../../../common/formElements/DataListElement';
import DateElement from '../../../common/formElements/DateElement';
import SelectElement from '../../../common/formElements/SelectElement';


export type IHonorsFilterData = {
	filterUser: number,
	filterTitle: string,
	filterFrom: string,
	filterTo: string,
	filterType: number
};

type IHonorsFilterFormProps = InjectedFormProps<IHonorsFilterData>;
const HonorsFilterForm: React.FC<IHonorsFilterFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Translation>
			{t => (
				<Row>
					<Field
						component={DataListElement}
						name="filterUser"
						id="filterUser"
						className="w-100"
						placeholder={t('honors.all.filterUser')}
						url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
					/>

					<Field
						component={InputElement}
						type="text"
						name="filterTitle"
						className="w-100 ml-1"
						label={t('honors.all.filterName')}
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
						label={t('honors.all.filterFrom')}
					/>

					<Field
						component={DateElement}
						name="filterTo"
						className="w-100"
						label={t('honors.all.filterTo')}
					/>
				</Row>
			)}
		</Translation>

		<Translation>
			{t => (
				<Row>
					<Field
						component={SelectElement}
						name="filterType"
						className="w-100"
						label={t('honors.all.filterType')}
					>
						<option value={0}>{t('honors.types.0')}</option>
						<option value={1}>{t('honors.types.1')}</option>
						<option value={2}>{t('honors.types.2')}</option>
						<option value={3}>{t('honors.types.3')}</option>
						<option value={4}>{t('honors.types.4')}</option>
						<option value={5}>{t('honors.types.5')}</option>
						<option value={6}>{t('honors.types.6')}</option>
						<option value={7}>{t('honors.types.7')}</option>
					</Field>
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

export default reduxForm<IHonorsFilterData>({
	form: 'honorsFilterForm'
})(HonorsFilterForm);
