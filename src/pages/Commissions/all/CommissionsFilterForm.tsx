import React, {useEffect} from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';
import {useLocation} from 'react-router';
import qs from 'querystring';

import InputElement from '../../../common/formElements/InputElement';
import {Button} from 'react-bootstrap';


export type ICommissionsFilterData = {
	filterName: string
};

type ICommissionsFilterFormProps = InjectedFormProps<ICommissionsFilterData>;
const CommissionsFilterForm: React.FC<ICommissionsFilterFormProps> = ({handleSubmit, initialize}) => {
	const location = useLocation();

	useEffect(() => {
		//parse QP and initialize
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
						placeholder={t('commissions.all.filterName')}
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
}

export default reduxForm<ICommissionsFilterData>({
	form: 'commissionsFilterForm'
})(CommissionsFilterForm);
