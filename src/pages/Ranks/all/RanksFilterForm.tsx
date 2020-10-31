import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import {Button} from 'react-bootstrap';


export type IRanksFilterData = {
	filterName: string
};

type IRanksFilterFormProps = InjectedFormProps<IRanksFilterData>;
const RanksFilterForm: React.FC<IRanksFilterFormProps> = ({handleSubmit}) => (
	<form onSubmit={handleSubmit} className="d-flex">
		<Translation>
			{t => (
				<Field
					component={InputElement}
					type="text"
					name="filterName"
					className="m-0"
					placeholder={t('ranks.all.filterName')}
				/>
			)}
		</Translation>

		<Translation>
			{t => (
				<div>
					<Button variant="info" className="ml-1" type="submit">
						{t('common.search')}
					</Button>
				</div>
			)}
		</Translation>
	</form>
);

export default reduxForm<IRanksFilterData>({
	form: 'ranksFilterForm'
})(RanksFilterForm);
