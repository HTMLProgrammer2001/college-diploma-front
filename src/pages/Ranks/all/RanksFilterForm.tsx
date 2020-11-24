import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {Button} from 'react-bootstrap';
import {useLocation} from 'react-router';
import qs from 'querystring';

import InputElement from '../../../common/formElements/InputElement';


export type IRanksFilterData = {
	filterName: string
};

type IRanksFilterFormProps = InjectedFormProps<IRanksFilterData>;
const RanksFilterForm: React.FC<IRanksFilterFormProps> = ({handleSubmit, initialize}) => {
	const location = useLocation();

	useEffect(() => {
		//parse QP and initialize form
		const q = qs.parse(location.search.slice(1));
		initialize(q);
	}, []);

	return (
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
};

export default reduxForm<IRanksFilterData>({
	form: 'ranksFilterForm'
})(RanksFilterForm);
