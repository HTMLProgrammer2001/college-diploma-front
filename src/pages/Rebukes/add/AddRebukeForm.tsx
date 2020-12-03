import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';

import required from '../../../utils/validators/required';
import date from '../../../utils/validators/date';


export type IRebukesAddData = {
	order: string,
	datePresentation: string,
	title: string,
	user: number
};

type IRebukesAddFormProps = InjectedFormProps<IRebukesAddData>;
const RebukesAddForm: React.FC<IRebukesAddFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit}>

		{
			error &&
				<div>{error}</div>
		}
		
		<div className="d-md-flex w-100">
			<Translation>
				{t => (
					<div className="w-100 pr-md-3">
						<Field
							component={InputElement}
							type="text"
							name="title"
							label={t('rebukes.add.title')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="text"
							name="order"
							label={t('rebukes.add.order')}
							validate={[required]}
						/>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 pl-md-3">
						<Field
							component={DateElement}
							name="datePresentation"
							label={t('rebukes.add.date')}
							validate={[date]}
						/>

						<Field
							component={DataListElement}
							name="user"
							placeholder={t('rebukes.add.user')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
							validate={[required]}
						/>
					</div>
				)}
			</Translation>
		</div>
	</form>
);

export default reduxForm<IRebukesAddData>({
	form: 'rebukesAddForm'
})(RebukesAddForm);
