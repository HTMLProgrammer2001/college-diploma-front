import React from 'react';
import {reduxForm, Field, InjectedFormProps} from 'redux-form';
import {Button, Row} from 'react-bootstrap';
import {Translation} from 'react-i18next';

import InputElement from '../../../../common/formElements/InputElement';
import DateElement from '../../../../common/formElements/DateElement';


export type IProfileRebukesFilterData = {
	filterFrom: string,
	filterTo: string,
	filterTitle: string
};

type IRebukesFilterProps = InjectedFormProps<IProfileRebukesFilterData>;
const RebukesFilterForm: React.FC<IRebukesFilterProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="w-100 center flex-column my-3">
		<Translation>
			{t => (
				<Row md={12}>
					<Field
						component={InputElement}
						name="filterTitle"
						type="text"
						label={t('profile.tabs.rebukes.rebukeName')}
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

export default reduxForm<IProfileRebukesFilterData>({
	form: 'profileRebukesFilter'
})(RebukesFilterForm);
