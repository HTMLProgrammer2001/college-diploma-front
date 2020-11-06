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
