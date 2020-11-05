import React from 'react';
import {reduxForm, InjectedFormProps, Field} from 'redux-form';
import {Translation} from 'react-i18next';

import InputElement from '../../../common/formElements/InputElement';
import required from '../../../utils/validators/required';
import DateElement from '../../../common/formElements/DateElement';
import DataListElement from '../../../common/formElements/DataListElement';
import SelectElement from '../../../common/formElements/SelectElement';


export type IHonorsAddData = {
	order: string,
	date: string,
	title: string,
	user: number,
	type: number
};

type IHonorsAddFormProps = InjectedFormProps<IHonorsAddData>;
const HonorsAddForm: React.FC<IHonorsAddFormProps> = ({handleSubmit, error}) => (
	<form onSubmit={handleSubmit}>

		{
			error &&
				<div>{error}</div>
		}
		
		<div className="d-md-flex w-100">
			<Translation>
				{t => (
					<div className="w-100 pr-3">
						<Field
							component={InputElement}
							type="text"
							name="title"
							label={t('honors.add.title')}
							validate={[required]}
						/>

						<Field
							component={InputElement}
							type="text"
							name="order"
							label={t('honors.add.order')}
							validate={[required]}
						/>

						<Field
							component={DateElement}
							name="date"
							label={t('honors.add.date')}
						/>
					</div>
				)}
			</Translation>

			<Translation>
				{t => (
					<div className="w-100 pl-3">
						<Field
							component={DataListElement}
							name="user"
							placeholder={t('honors.add.user')}
							url={`${process.env.REACT_APP_SERVER_URL}/search/users`}
						/>

						<Field
							component={SelectElement}
							name="type"
							className="mb-2"
							label={t('honors.add.type')}
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
					</div>
				)}
			</Translation>
		</div>
	</form>
);

export default reduxForm<IHonorsAddData>({
	form: 'honorsAddForm'
})(HonorsAddForm);
